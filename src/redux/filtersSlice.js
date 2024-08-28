import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
    name: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFilters,
    reducers: {
        setStatusFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;