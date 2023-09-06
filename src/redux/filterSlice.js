import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setContactsFilter: {
      reducer: (state, action) => {
        state.value = action.payload;
      },
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export default filterSlice.reducer;
