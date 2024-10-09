import React from "react";
import styles from "./experience.module.css";
import { getImageUrl } from "../../utils";

import skills from "../../data/skills.json"
import history from "../../data/history.json"

export const Experience = ()=>{
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>

                <div className={styles.skills}>
                    {
                        skills.map((skill, id)=>{
                            return(
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem,id)=>{
                            return (
                            <li key={id} className={styles.historyItem}>
                                <img className={styles.imageSrc} src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} logo`} />

                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.organisation}`}</h3>
                                    <h4>{historyItem.role}</h4>
                                    
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience,id)=>{
                                            return (
                                                <li key = {id }>{experience}</li>
                                            )
                                        })}
                                    </ul>
                                
                                </div>
                            </li>
                            )
                        }) 
                    }
                </ul>

            </div>
             
        </section>
    )
}