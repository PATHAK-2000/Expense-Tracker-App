import React, { useState, useEffect, useRef, useContext } from "react";
import "./create-expense.css";
import { useNavigate } from "react-router-dom";

import More from "../../assets/ExpandMore.svg";
import Less from "../../assets/ExpandLess.svg";
import UserContext from "../../Context";

const CreateExpense = () => {
  const [dropMenu, setDropMenu] = useState(true);

  const navigate = useNavigate();

  const {
    selectType,
    setSelectType,
    description,
    setDescription,
    amount,
    setAmount,
    finalData,
    setFinalData,
  } = useContext(UserContext);
  let menuRef = useRef();

  let handleClick = () => {
    setDropMenu(!dropMenu);
  };

  let selectItems = (e) => {
    setSelectType(e.target.getAttribute("value"));
    setDropMenu(!dropMenu);
  };

  // Desription change
  let handleDesctiptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Amount change
  let handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  let handleSubmit = () => {
    setFinalData([
      ...finalData,
      { type: selectType, description: description, amount: amount },
    ]);
    setSelectType("");
    setDescription("");
    setAmount("");
    navigate("/view")
  };

  useEffect(() => {
    selectItems;
  }, [selectType]);

  // For closing pop-up on clicking outside.
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropMenu(true);
      }
    };

    document.addEventListener("click", handler);
  }, []);

  return (
    <div className="expense__main">
      <div className="expense__type">
        <div className="type__label">
          <label>Select Type:</label>
        </div>
        <div className="selection" onClick={handleClick} ref={menuRef}>
          <div className="selection__name">
            <h1> {selectType ? selectType : "SELECT"}</h1>
          </div>
          <div className="selection__img">
            {dropMenu ? (
              <img src={More} alt="Expand-More" className="expand" />
            ) : (
              <img src={Less} alt="Expand-Less" className="expand" />
            )}
          </div>
        </div>

        <div
          className={dropMenu ? "dropDown__hidden" : "dropDown__visible"}
          onClick={selectItems}
          value={selectType}
        >
          <h1 value="HOME">HOME</h1>
          <h1 value="TRAVEL">TRAVEL</h1>
          <h1 value="FOOD">FOOD</h1>
          <h1 value="MISC">MISC</h1>
        </div>
      </div>

      <div className="expense__description">
        <div className="desctiption__label">
          <label>Description:</label>
        </div>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
          onChange={handleDesctiptionChange}
          value={description}
        />
      </div>

      <div className="expense__amount">
        <div className="amount__label">
          <label>Amount:</label>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Amount"
          onChange={handleAmountChange}
          value={amount}
        />
      </div>

      <div className="expense__submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CreateExpense;
