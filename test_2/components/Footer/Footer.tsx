import React, { useState, useEffect, useRef } from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerMainDiv}>
        <div className={styles.footerContainerDiv}>
          <div className={styles.footerLeft}>
            <p>© Vinícius Neves Costa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
