import React from 'react';
import "./Header.css";

export const Header = () => {
    return <div id="container-header">
        <div className="container-header_subContainer">
            <div className="container-header_contentIzq">
                <p>facebook</p>
                <p>instagram</p>
            </div>
        </div>
        <div className="container-header_subContainer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint ducimus enim architecto vel ut temporibus molestiae error incidunt tempora, exercitationem!</p>
        </div>
        <div className="container-header_subContainer">
            <div className="container-header_contentDer">
                <p>3332221100 | 3332221100</p>
                <p>hercorHelmets</p>
            </div>
        </div>
    </div>;
};

export default Header;