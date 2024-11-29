import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { createStyleRegistry } from "styled-jsx";
import Link from "next/link";
const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
