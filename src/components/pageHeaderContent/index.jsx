import React from "react";
import './style.scss';

const PageHeaderContent =(props)=>{
    const {headerText,icon} =props;

    return (
        <div className="header-wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default PageHeaderContent;