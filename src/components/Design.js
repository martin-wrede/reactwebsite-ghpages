import React from  'react';

import '../App.css';

import BilderZeigen from "./image-slider";
import BilderZeigen2 from "./image-wrapper";

export function Design () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">
            <h1>Design </h1>

            <p>Gestaltung und Umsetzung von Printsachen, Website:</p>
            <br />
            <h2>Erscheinungsbild</h2>
            <p>
            Logo Gestaltung<br />
            Faltblatt<br />
            Plakat<br />
            Broschüren<br />
            Kataloge
            </p>
        </div>
        <div id="sidebar" className="content_sub" >
        <BilderZeigen2  value="Design" />
        <div className="clear">

            </div>

        </div>
</div>

) }
