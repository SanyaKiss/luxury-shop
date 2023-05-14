import React, { useState } from "react";
import "../../scss/components/UI/Counter.scss";

import { useAppDispatch } from "../../store/store";
import { decreaseCount, increaseCount } from "../../store/cart/slice";
import { CartItem } from "../../store/cart/types";

type CounterProps = {
  item: CartItem;
};

const Counter: React.FC<CounterProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(item.quantity);

  const increase = () => {
    setCount(count + 1);
    dispatch(increaseCount(item));
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decreaseCount(item));
    }
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrease}>
        <span>-</span>
      </button>
      <input type="text" className="counter__input" value={count} />
      <button className="counter__button" onClick={increase}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
