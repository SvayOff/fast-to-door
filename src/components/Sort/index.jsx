import React from 'react';
import { setSort } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);

  const [openSort, setOpenSort] = React.useState(false);

  const sortList = [
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

  const changeSort = (sort) => {
    console.log(sort);
    dispatch(setSort(sort));

    setOpenSort(false);
  };

  return (
    <div className="products__sort">
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
