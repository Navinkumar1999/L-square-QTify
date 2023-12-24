import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import Search from "../Search/Search";
import styles from "./Navbar.module.css"
import { Link } from "@mui/material";
function Navbar({ searchdata }){
    return(<>
    <nav className={styles.navbar}>
        <Link to="/">
          <Logo/>
        </Link>
        <Search className="search" placeholder={"Search a album of your choice"} searchdata={searchdata}/>
        <Button  class={styles.feedback}>Give Feedback</Button> 

    </nav>
    </>
    )
}


export default Navbar;