import React from 'react'
import { ListSection } from './data.js';
import "./Main.css";

export const MainSection = () => {
  return (
    <div className="main_container">
        <div className="streak_main">
            {ListSection.map(Lists => (
                <div className="main_card" key={Lists.id}>
                    <div className="main_box">
                        <img src={Lists.icon} alt={Lists.title} />
                        <p>{Lists.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
