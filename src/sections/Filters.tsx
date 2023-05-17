import React from "react";
import "../scss/sections/Filters.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../store/filters/selectors";
import { changeCategory, changeSortingType } from "../store/filters/slice";
import { categories } from "../constants";
import SearchInput from "../components/UI/SearchInput";

const sortingTypes = ["Popularity", "Price", "Title"];

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { category, sortingType } = useSelector(selectFilters);

  const categoryPopup = React.useRef<HTMLDivElement>(null);
  const sortingPopup = React.useRef<HTMLDivElement>(null);

  const [isCategoryPopupActive, setIsCategoryPopupActive] =
    React.useState(false);
  const [isSortingPopupActive, setIsSortingPopupActive] = React.useState(false);

  const handleClickCategoryPopup = () => {
    setIsCategoryPopupActive(
      (prevIsCategoryPopupActive) => !isCategoryPopupActive
    );
  };

  const handleClickSortingPopup = () => {
    setIsSortingPopupActive(
      (prevIsSortingPopupActive) => !isSortingPopupActive
    );
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryPopup.current &&
        !event.composedPath().includes(categoryPopup.current)
      ) {
        setIsCategoryPopupActive(false);
      }
      if (
        sortingPopup.current &&
        !event.composedPath().includes(sortingPopup.current)
      ) {
        setIsSortingPopupActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="filters">
      <div className="filters__container">
        <SearchInput />
        <div className="filters__popups">
          <div className="filters__category">
            <span className="popup__subtitle">Category: </span>
            <div
              ref={categoryPopup}
              className="filters__popup popup"
              onClick={() => handleClickCategoryPopup()}
            >
              <span className="popup__title">{category}</span>
              <img
                className={`popup__arrow${
                  isCategoryPopupActive ? "" : "--flipped"
                }`}
                src="/images/filters/arrow.svg"
                alt=""
              />
              <ul
                className={`popup__variants${
                  isCategoryPopupActive ? "" : "--hidden"
                }`}
              >
                {categories.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => dispatch(changeCategory(item))}
                    className={`popup__variant${
                      item === category ? "--active" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="filters__sorting">
            <span className="popup__subtitle">Sorting by:</span>
            <div
              ref={sortingPopup}
              className="filters__popup popup"
              onClick={() => handleClickSortingPopup()}
            >
              <span className="popup__title">{sortingType}</span>
              <img
                className={`popup__arrow${
                  isSortingPopupActive ? "" : "--flipped"
                }`}
                src="/images/filters/arrow.svg"
                alt=""
              />
              <ul
                className={`popup__variants${
                  isSortingPopupActive ? "" : "--hidden"
                }`}
              >
                {sortingTypes.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => dispatch(changeSortingType(item))}
                    className={`popup__variant${
                      item === sortingType ? "--active" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
