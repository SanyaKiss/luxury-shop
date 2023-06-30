export type FiltersStore = {
  searchValue: string;
  category: string;
  sortingType: string;
  setSearchValue: (value: string) => void;
  changeCategory: (category: string) => void;
  changeSortingType: (sort: string) => void;
};

