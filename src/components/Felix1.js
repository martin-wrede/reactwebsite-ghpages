import React from  'react';

import '../App.css';
import BilderZeigen from "./image-slider";


export function Felix1 () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">

        <h1>felix1.de</h1>



<p></p>



<p></p>



<p>Für die Steuerberater Vermittlungs-Plattform entstand eine Gestaltung von User-Interface. Dies umfasste responsive Lösungen, Info-Grafiken, Animationen oder die Einbindung von Filmen.</p>



<p></p>



<p></p>



<p> • Gestaltung, Interface-Design</p>



<p>Link: <a href="http://www.felix1.de">www.felix1.de</a></p>

        </div>
        <div id="sidebar" className="content_sub" >
            <div className="clear">
            <BilderZeigen   collection = "felix1" />
            </div>

        </div>
</div>

) }
