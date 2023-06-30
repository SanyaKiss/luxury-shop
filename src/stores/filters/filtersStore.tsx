import { create } from "zustand";
import { FiltersStore } from "./types";

export const useFilters = create<FiltersStore>((set) => ({
  searchValue: "",
  category: "All",
  sortingType: "Popularity",
  setSearchValue: (value) =>
    set((state) => {
      state.searchValue = value;
      return { ...state };
    }),
  changeCategory: (category) =>
    set((state) => {
      state.category = category;
      return { ...state };
    }),
  changeSortingType: (sort) =>
    set((state) => {
      state.sortingType = sort;
      return { ...state };
    }),
}));
