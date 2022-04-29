import React from "react";

export const InvestmentView = (props) => {
  const { detail } = props;

  return (
    <div className="page-container">
      <div className="pricing-container">
        <>
          {detail.map((item) => (
            <ul>
              <>
                <div className="pricing">
                  <li>
                    <img src={item.img} alt="" />
                  </li>
                  <h1>{item.type}</h1>
                  <li>{item.price}</li>
                  <li>{item.detail}</li>
                  <li>{item.qty}</li>
                </div>
              </>
            </ul>
          ))}
        </>
      </div>
    </div>
  );
};
export default InvestmentView;
