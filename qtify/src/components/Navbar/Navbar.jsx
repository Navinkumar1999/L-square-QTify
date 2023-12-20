import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import Search from "../Search/Search";
import styles from "./Navbar.module.css"
function Navbar({ searchdata }){
    return(<>
    <nav className={styles.navbar}>
        <a href="/">
          <Logo/>
        </a>
        <Search className="search" placeholder={"Search a album of your choice"} searchdata={searchdata}/>
        <Button>Give Feedback</Button> 

    </nav>
    </>
    )
}


export default Navbar;