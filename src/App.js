import { useState } from "react";
import classes from "./App.module.css";
import useCounter from "./hook/use-counter";

function App() {
  const {
    value: firstAmount,
    plusValue: plusFirstValue,
    minusValue: minusFirstValue,
    deleteValue: deleteFirstValue,
    refreshAllAmount: refreshFirstAmount,
  } = useCounter();

  const {
    value: secondAmount,
    plusValue: plusSecondValue,
    minusValue: minusSecondValue,
    deleteValue: deleteSecondValue,
    refreshAllAmount: refreshSecondAmount,
  } = useCounter(".second");

  const {
    value: thirdAmount,
    plusValue: plusThirdValue,
    minusValue: minusThirdValue,
    deleteValue: deleteThirdValue,
    refreshAllAmount: refreshThirdAmount,
  } = useCounter(".third");

  let [amount, setAmount] = useState(0);
  // let [firstAmount, setFirstAmount] = useState("Zero");

  console.log(amount);

  const refreshHandler = () => {
    setAmount(0);
    refreshFirstAmount();
    refreshSecondAmount();
    refreshThirdAmount();
  };

  const plusFirstAmount = () => {
    plusFirstValue();
    if (firstAmount === "Zero") {
      setAmount(amount + 1);
    }
  };

  const minusFirstAmount = () => {
    minusFirstValue();
    if (firstAmount === 1) {
      setAmount(amount - 1);
    }
  };

  const deleteFirstAmount = () => {
    deleteFirstValue();
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  const plusSecondAmount = () => {
    plusSecondValue();
    if (secondAmount === "Zero") {
      setAmount(amount + 1);
    }
  };

  const minusSecondAmount = () => {
    minusSecondValue();
    if (secondAmount === 1) {
      setAmount(amount - 1);
    }
  };

  const deleteSecondAmount = () => {
    deleteSecondValue();
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  const plusThirdAmount = () => {
    plusThirdValue();
    if (thirdAmount === "Zero") {
      setAmount(amount + 1);
    }
  };

  const minusThirdAmount = () => {
    minusThirdValue();
    if (thirdAmount === 1) {
      setAmount(amount - 1);
    }
  };

  const deleteThirdAmount = () => {
    deleteThirdValue();
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <p>Items</p>
        <div className={classes.amount}>
          <h2>{amount}</h2>
        </div>
      </div>
      <div className={classes.refresh}>
        <button onClick={refreshHandler}>🔁</button>
      </div>
      <div className={classes.product}>
        <div className="first">
          <div className={classes.zero}>
            <button>{firstAmount}</button>
          </div>
          <div className={classes.plus} onClick={plusFirstAmount}>
            <button>+</button>
          </div>
          <div className={classes.minus} onClick={minusFirstAmount}>
            <button>-</button>
          </div>
          <div className={classes.delete} onClick={deleteFirstAmount}>
            <button>x</button>
          </div>
        </div>
        <div className="second">
          <div className={classes.zero}>
            <button>{secondAmount}</button>
          </div>
          <div className={classes.plus} onClick={plusSecondAmount}>
            <button>+</button>
          </div>
          <div className={classes.minus} onClick={minusSecondAmount}>
            <button>-</button>
          </div>
          <div className={classes.delete} onClick={deleteSecondAmount}>
            <button>x</button>
          </div>
        </div>
        <div className="third">
          <div className={classes.zero}>
            <button>{thirdAmount}</button>
          </div>
          <div className={classes.plus} onClick={plusThirdAmount}>
            <button>+</button>
          </div>
          <div className={classes.minus} onClick={minusThirdAmount}>
            <button>-</button>
          </div>
          <div className={classes.delete} onClick={deleteThirdAmount}>
            <button>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
