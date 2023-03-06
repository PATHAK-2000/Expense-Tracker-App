import React, { useContext } from "react";
import UserContext from "../../Context";
import "./view-expense.css";
const ViewExpense = () => {
  const { finalData } = useContext(UserContext);

  return (
    <div className="view__main">
      <div className="title">
        <h2>Type</h2>
        <h2>Description</h2>
        <h2>Amount</h2>
      </div>
      <div className="details">
        {finalData?.map((data) => {
          <>
            {console.log(data?.type)}
            <h1>{data?.type}</h1>
            <h1>{data?.description}</h1>
            <h1>{data?.amount}</h1>
          </>;
        })}
      </div>
    </div>
  );
};

export default ViewExpense;
