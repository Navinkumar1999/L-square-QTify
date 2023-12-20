import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import Search from "../Search/Search";
import styles from "./Navbar.module.css"
function Navbar(){
    return(<>
    <nav className={styles.navbar}>
        <a href="/">
          <Logo/>
        </a>
        <Search className="search" placeholder={"Search a album of your choice"}></Search>
        <Button>Give Feedback</Button> 

    </nav>
    </>
    )
}


export default Navbar;