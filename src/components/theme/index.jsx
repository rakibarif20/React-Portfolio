import React, { useEffect, useState } from "react";
import "./style.scss";

import { ImCog } from "react-icons/im";
import setTheme from "../../helper/theme";

const colorMenus =[
    {
        id:'yellow',
        bgColor : '#ffdd40'
    },
    {
        id:'red',
        bgColor:'#e82a2a'

    },
    {
        id:'green',
        bgColor:'#6ac045'
    },
    {
        id:'blue',
        bgColor:'#5078ff'
    }
]
const Theme = () => {
    const [theme,setCurrnetTheme] = useState('yellow')
    const [toggle,setToggle] = useState(false)

    const handleToggleTheme = (currentId)=>{
        setCurrnetTheme(currentId)
        setToggle(false)
    }

    useEffect(()=>{
        setTheme(theme)
    },[theme])
  return (
    <div className={`theme-wrapper ${toggle ? 'active' : ''}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={()=> setToggle(!toggle)} size={25} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
            {colorMenus.map((item,index)=>{
                return(
                    <li onClick={()=>handleToggleTheme(item.id)} key={index} style={{background: item.bgColor}}></li>
                )
            })}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
