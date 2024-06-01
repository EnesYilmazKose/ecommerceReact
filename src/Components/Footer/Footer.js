import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            Copyright {year} - Going out of Business Ltd. Şti.
        </div>
    )
}

export default Footer;