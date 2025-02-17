import React from 'react';
import styles from "./Search.module.css"
import { ReactComponent as SearchIcon } from "../../Assets/Search-icon.svg";

function Search ({ placeholder }){
    const onSubmit=(e)=>{
        e.preventDefault();
    }

    return (

        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} required placeholder={placeholder}/>
            <button className={styles.button} type="submit">
                <SearchIcon/>
                </button>
        </form>
    )
}



export default Search;