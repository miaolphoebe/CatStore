import React, { useContext } from "react";
import UiContext from "../store/ui-context";
import classes from "./Dashboard/Dashboard.module.scss";
import Header from "./Dashboard/Header/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import customerClasses from "./Dashboard/CustomersList/CustomersList.module.scss";
import productSalesClasses from "./ProductSales.module.scss";

import { PolarArea } from "react-chartjs-2";
import SalesTable from "./Dashboard/ProductSales/SalesTable/SalesTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const monthLabels = ["January", "February", "March", "April", "May", "June"];

export const dataOfSalesAndExpense = {
  labels: monthLabels,
  datasets: [
    {
      label: "Expense",
      data: monthLabels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Sales",
      data: monthLabels.map(() =>
        faker.datatype.number({ min: 50, max: 1000 })
      ),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 1",
    },
  ],
};

export const dataOfTop5Product = {
  labels: [
    "Frisco Animal Series Cat Condo",
    "Wooden Cat Tree",
    "Automatic Cat Feeder",
    "Farmhouse Cardboard Cat House",
    "Ceramic Cat Water Fountain",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [654, 710, 568, 330, 207],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const ProductSales = () => {
  const uiCtx = useContext(UiContext);
  const themeClass =
    uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
  return (
    <div className={`${classes.scroll} ${themeClass}`}>
      <div className={`${classes.dashboard__container} ${themeClass}`}>
        <div className={classes.dashboard}>
          <Header text="Product Sales" />
        </div>
        <div className={customerClasses.newCustomer}>
          <h2
            className={`${customerClasses.customerslist__header__title} ${themeClass}`}
          >
            Products Sales vs Expenses Year 2022
          </h2>
          <div>
            <Bar options={options} data={dataOfSalesAndExpense} />
          </div>
        </div>
        <div className={classes.dashboard__bottom}>
          <div className={`${productSalesClasses.top5Products} ${themeClass}`}>
            <h2
              className={`${productSalesClasses.top5Products__header__title} ${themeClass}`}
            >
              Top 5 Products in Year 2022
            </h2>
            <PolarArea data={dataOfTop5Product} />
          </div>
          <div style={{ marginLeft: `32px` }}>
            <div
              className={`${productSalesClasses.top5Products} ${themeClass}`}
            >
              <h2
                className={`${productSalesClasses.top5Products__header__title} ${themeClass}`}
              >
                Product Sales
              </h2>
              <SalesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSales;
