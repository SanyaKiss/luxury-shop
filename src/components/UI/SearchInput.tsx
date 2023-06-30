import React, { ChangeEvent, useState } from "react";
import "../../scss/UI/SearchInput.scss";
import { useFilters } from "../../stores/filters/filtersStore";

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const setSearchValue = useFilters((state) => state.setSearchValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className='search-container'>
      <input
        placeholder='Search...'
        className='search-input'
        type='text'
        value={value}
        onChange={(e) => onChange(e)}
      />
      <img src='public/images/header/search.png' className='search-icon' />
    </div>
  );
};
