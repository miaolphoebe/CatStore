import React, { useContext } from "react";
import UiContext from "./../../../../store/ui-context";

import classes from "./SalesTable.module.scss";

const productSalesData = [
  {
    id: 1,
    productName: "Cute Cat Condo",
    sales: "330",
    stock: "654",
    amount: "415.01",
    status: true,
  },
  {
    id: 2,
    productName: "Wooden Cat Tree",
    sales: "568",
    stock: "321",
    amount: "326.51",
    status: true,
  },
  {
    id: 3,
    productName: "Automatic Feeder",
    sales: "124",
    stock: "880",
    amount: "79.99",
    status: true,
  },
  {
    id: 4,
    productName: "Cardboard House",
    sales: "710",
    stock: "330",
    amount: "19.98",
    status: true,
  },
  {
    id: 5,
    productName: "Water Fountain",
    sales: "654",
    stock: "207",
    amount: "57.17",
    status: true,
  },
  {
    id: 6,
    productName: "Cat Food Bowl",
    sales: "256",
    stock: "0",
    amount: "6.54",
    status: false,
  },
  {
    id: 7,
    productName: "Pop-Up Tent Toy",
    sales: "256",
    stock: "0",
    amount: "18.54",
    status: false,
  },
];

const SalesTable = () => {
  const uiCtx = useContext(UiContext);
  const themeClass =
    uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
  return (
    <table className={`${classes.table} ${themeClass}`}>
      <thead>
        <tr className={`${classes.table__head} ${themeClass}`}>
          <th>Product Name</th>
          <th>Sales</th>
          <th>Stock</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {productSalesData.map(
          ({ id, productName, sales, stock, amount, status }) => (
            <tr key={id}>
              <td>
                <span>{productName}</span>
              </td>
              <td>{sales}</td>
              <td>{stock}</td>
              <td>{amount}</td>
              <td style={status ? { color: "#33c863" } : { color: "#eb5757" }}>
                {status ? "In Stock" : "No Stock"}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default SalesTable;
