import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersSliceState } from "./types";

const initialState: FiltersSliceState = {
  searchValue: "",
  category: "All",
  sortingType: "Popularity",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    changeSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload;
    },
  },
});

export const {setSearchValue, changeCategory, changeSortingType } = filtersSlice.actions;

export default filtersSlice.reducer;
