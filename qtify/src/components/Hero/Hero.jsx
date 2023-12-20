import React from "react";
import HeadPhone from "../../Assets/vibrating-headphone.png"
import styles from "./Hero.module.css"

function Hero(){
return(
    
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episode</h1>
        </div>
        <div>
            {/* <img scr={require("../../Assets/vibrating-headphone.png")} alt="headphone" width={212}/> */}
            <img
            src={HeadPhone} alt="headphone" width={212}
            />
        </div>
    </div>
   
)
}

export default Hero;