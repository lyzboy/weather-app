import React from "react";
import SearchBarContainer from "../../containers/searchBarContainer";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <p className={styles.header__title}>Weather App</p>
            <SearchBarContainer parentClass={styles.header__searchBar} />
        </div>
    );
};

export default Header;
