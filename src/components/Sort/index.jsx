import React from 'react';
import { SortContext } from '../../pages/Home';

const Sort = () => {
  const [openSort, setOpenSort] = React.useState(false);

  const { sort, setSort } = React.useContext(SortContext);

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
    setSort(sort);
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
