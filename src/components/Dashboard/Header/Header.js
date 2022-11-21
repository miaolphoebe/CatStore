import React, { useContext } from "react";
import UiContext from "./../../../store/ui-context";

import SearchSVG from "./../../../assets/SearchSVG";
import NotificationSVG from "./../../../assets/NotificationSVG";

import classes from "./Header.module.scss";

const Header = ({ text }) => {
  const uiCtx = useContext(UiContext);
  const iconFill = uiCtx.theme === "light" ? "#929292" : "#fff";
  const themeClass =
    uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
  return (
    <div className={classes.header}>
      <h2 className={`${classes.header__title} ${themeClass}`}>{text}</h2>
      <div className={classes.header__content}>
        <div className={classes.header__content__links}>
          <div className={classes.link__icon}>
            <SearchSVG fillColor={iconFill} />
          </div>
          <div
            className={`${classes.link__icon} ${classes.link__icon__notification}`}
          >
            <NotificationSVG fillColor={iconFill} />
          </div>
        </div>
        <div className={`${classes.header__content__divider} ${themeClass}`} />
        <div className={classes.header__content__profile}>
          <span className={`${classes.profile__name} ${themeClass}`}>
            LuMiao
          </span>
          <div className={classes.profile__img}>
            <img
              src="https://ca.slack-edge.com/T024FPYBQ-U042QD51EHH-d6ab2507d3e1-512"
              alt="Profile"
              className={classes.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
