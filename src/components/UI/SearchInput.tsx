import React, { ChangeEvent, useState } from "react";
import "../../scss/components/UI/SearchInput.scss";
import { setSearchValue } from "../../store/filters/slice";
import { useAppDispatch } from "../../store/store";

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className="search-container">
      <input
        placeholder="Search..."
        className="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <img
        src="../../../public/images/header/search.png"
        className="search-icon"
      />
    </div>
  );
};

export default SearchInput;
