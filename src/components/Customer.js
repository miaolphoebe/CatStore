import React, { useContext } from "react";
import UiContext from "../store/ui-context";
import classes from "./Dashboard/Dashboard.module.scss";
import customerClasses from "./Dashboard/CustomersList/CustomersList.module.scss";
import Header from "./Dashboard/Header/Header";
import CustomersList from "./Dashboard/CustomersList/CustomersList";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export const dataOfCustomerGender = {
  labels: ["Female", "Male"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 0.5,
    },
  ],
};

const monthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dataOfNewCustomer = {
  labels: monthLabels,
  datasets: [
    {
      label: "New Customers",
      data: monthLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Customer = () => {
  const uiCtx = useContext(UiContext);
  const themeClass =
    uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
  return (
    <div className={`${classes.scroll} ${themeClass}`}>
      <div className={`${classes.dashboard__container} ${themeClass}`}>
        <div className={classes.dashboard}>
          <Header text="Customers" />
          <div className={`${customerClasses.newCustomer}${themeClass}`}>
            <h2
              className={`${customerClasses.customerslist__header__title} ${themeClass}`}
            >
              New Customers by Month
            </h2>
            <div>
              <Line data={dataOfNewCustomer} />
            </div>
          </div>
          <div className={classes.dashboard__bottom}>
            <div style={{ marginRight: `32px` }}>
              <div className={customerClasses.newCustomerGender}>
                <h2
                  className={`${customerClasses.customerslist__header__title} ${themeClass}`}
                >
                  Customers Gender
                </h2>
                <div>
                  <Doughnut data={dataOfCustomerGender} />
                </div>
              </div>
            </div>{" "}
            <CustomersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
