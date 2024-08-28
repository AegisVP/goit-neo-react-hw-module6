import { createSlice } from '@reduxjs/toolkit';

const initialFilters = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;
