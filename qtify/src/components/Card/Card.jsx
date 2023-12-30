import React from "react";
import styles from "./Card.module.css";
import { Tooltip} from "@mui/material";
import { Link } from "react-router-dom";
function Card({data ,type}){

    const getCard =(type)=>{
        switch(type){
            case "album":{
                const {image,title,follows,songs, slug} =data;
                return(
                    <Tooltip title={`${songs.length} songs`} placement ="top" arrow>
                         <Link to={`/album/${slug}`}> 
                            <div className={styles.wrapper}>
                                 <div className={styles.card}>
                                     <img src={image} alt="song" />
                                    <div className={styles.banner}>
                                            <div className={styles.fill}>
                                                <p>{follows} Follows</p> 
                                            </div>
                                    </div>
                                  </div>
                                <div className={styles.titlewrapper}>
                                    <p>{title}</p>
                                 </div>
                            </div>
                         </Link> 
                    </Tooltip>
                )
                
                
    
            }
            case "song":{
                console.log(data);
                const {image,likes,title} =data;
                return(
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="song" />
                        <div className={styles.banner}>
                            <div className={styles.fill}>
                               <p>{likes} Likes</p> 
                            </div>
                        </div>
                    </div>
                    <div className={styles.titlewrapper}>
                        <p>{title}</p>
                    </div>
                </div>
                )
                
                
            }
            default:{
                return<></>
            }
        }
    }

    return getCard(type);
}


export default Card;