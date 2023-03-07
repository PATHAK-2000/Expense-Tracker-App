import React, { useContext } from "react";
import UserContext from "../../Context";
import "./view-expense.css";
const ViewExpense = () => {
  const { finalData } = useContext(UserContext);

  let typeData = finalData?.map((datas) => datas.type);
  let DescData = finalData?.map((datas) => datas.description);
  let AmountData = finalData?.map((datas) => datas.amount);

  let typeArrayData = [];
  let DescArrayData = [];
  let AmountArrayData = [];
  typeData.map((data) => typeArrayData.push(data));
  DescData.map((data) => DescArrayData.push(data));
  AmountData.map((data) => AmountArrayData.push(data));

  typeArrayData.shift();
  DescArrayData.shift();
  AmountArrayData.shift();

  const type = typeArrayData?.map((data, index) => (
    <p key={index} className="details__data">
      {data}
      {localStorage.setItem("type", JSON.stringify(typeArrayData))}
    </p>
  ));

  const description = DescArrayData?.map((data, index) => (
    <p key={index} className="details__data">
      {data}
      {localStorage.setItem("description", JSON.stringify(DescArrayData))}
    </p>
  ));

  const amount = AmountArrayData?.map((data, index) => (
    <p key={index} className="details__data">
      {data}
      {localStorage.setItem("amount", JSON.stringify(AmountArrayData))}
    </p>
  ));

  const getTypeData = JSON.parse(localStorage.getItem("type"));
  const getDescriptionData = JSON.parse(localStorage.getItem("description"));
  const getAmountData = JSON.parse(localStorage.getItem("amount"));

  console.log("typedata", getTypeData);

  return (
    <div className="view__main">
      <div className="view__main__title">
        <div className="title">
          <h2>Type</h2>
          <h2>Description</h2>
          <h2>Amount</h2>
        </div>
      </div>
      <div className="details">
        <div className="details__type">
          {getTypeData.map((data) => (
            <h1 className="details__data">{data}</h1>
          ))}
        </div>
        <div className="details__description">
          {getDescriptionData.map((data) => (
            <h1 className="details__data">{data}</h1>
          ))}
        </div>
        <div className="details__amount">
          {getAmountData.map((data) => (
            <h1 className="details__data">{data}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewExpense;
