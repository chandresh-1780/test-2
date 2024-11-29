import React, { useState, useEffect, useRef } from "react";
import styles from "./homebanner.module.scss";
import Link from "next/link";

const Homebanner = () => {
  return (
    <>
      <div className={styles.homeMainDiv}>
        <div className={styles.homeContainerDiv}>
          <div className={styles.homeHeaderDiv}>
            <div className={styles.headerMainDiv}>
              <div className={styles.headerSubDiv}>
                <div className={styles.navList}>
                  <Link href="/">Home</Link>
                  <Link href="/">Sobre</Link>
                  <Link href="/">Cadastro</Link>
                  <Link href="/clients">Login</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeSubDiv}>
            <div className={styles.homeLeft}>
              <h2>
                CIÊNCIAS <br />
                HUMANAS
              </h2>
              <button className={styles.homeBtn}>Começar</button>
            </div>
            <div className={styles.homeRight}>
              <img src="/home/play.png" alt="play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
