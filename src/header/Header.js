import React from 'react';
import styled from "styled-components";
import {HeaderData} from "./HeaderData";

function Header() {
    return (
        <StyledHeader>
            <nav>
                <div className="logo">
                    <img src="headerimages/castle.svg" alt=""/>
                    <h1>Daugavpils</h1>
                </div>
                    <ul className="nav-links">
                        {HeaderData.map((val,key)=>{
                        return(
                            <li className="cool-link" key={key} onClick={()=>{window.location.pathname = val.link}} id={window.location.pathname === val.link ? "active" :""}>
                                <div>{val.title}</div>{""}
                            </li>
                        );
                        })}
                    </ul>
            </nav>
        </StyledHeader>
    );
}
const StyledHeader = styled.div`

 
`;
export default Header;