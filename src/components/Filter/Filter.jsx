import React from 'react';
import { Input, Label, Title } from './Filter.styles';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactsFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };
  return (
    <div>
      <Title>Find contacts by name</Title>
      <Label>
        <Input
          name="filter"
          type="text"
          value={useSelector(getFilter)}
          onChange={handleFilterChange}
        />
      </Label>
    </div>
  );
};

export default Filter;
