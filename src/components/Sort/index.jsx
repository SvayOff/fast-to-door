import React from 'react';
import { setSort } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const sortList = [
  {
    name: 'Price: High to Low',
    sortProperty: 'price',
  },
  {
    name: 'Price: Low to High',
    sortProperty: '-price',
  },
  {
    name: 'From A to Z',
    sortProperty: 'title',
  },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);

  const [openSort, setOpenSort] = React.useState(false);

  const sortRef = React.useRef();

  const changeSort = (sort) => {
    dispatch(setSort(sort));

    setOpenSort(false);
  };

  React.useEffect(() => {
    const clickOusideSort = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setOpenSort(false);
      }
    };

    document.body.addEventListener('click', clickOusideSort);

    return () => {
      document.doby.removeEventListener('click', clickOusideSort);
    };
  }, []);

  return (
    <div ref={sortRef} className="products__sort">
      <h3 className="products__sort-title">
        Sort By: <span onClick={() => setOpenSort(!openSort)}>{sort.name}</span>
      </h3>

      {openSort && (
        <ul className="products__sort-list">
          {sortList.map((sort) => (
            <li key={sort.name} onClick={() => changeSort(sort)}>
              {sort.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
