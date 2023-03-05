import React, { useState } from "react";
import "./create-expense.css";
import More from "../../assets/ExpandMore.svg";
const CreateExpense = () => {
  const [dropMenu, setDropMenu] = useState(false);

  let handleClick = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="expense__main">
      <div className="expense__type">
        <div className="selection" onClick={handleClick}>
          <div className="selection__name">
            <h1> SELECT</h1>
          </div>
          <div className="selection__img">
            <img src={More} alt="Expand-More" className="expand-more" />
          </div>
        </div>
        <div className={dropMenu ? "dropDown__hidden" : "dropDown__visible"}>
          <h1>HOME</h1>
          <h1>TRAVEL</h1>
          <h1>FOOD</h1>
          <h1>MISC</h1>
        </div>
      </div>
      <div className="expense__description">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
        />
      </div>
      <div className="expense__amount">
        <input type="number" name="amount" id="amount" placeholder="Amount" />
      </div>
    </div>
  );
};

export default CreateExpense;
