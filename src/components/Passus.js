import React from  'react';

import '../App.css';
import BilderZeigen from "./image-slider";



export function Passus () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">

        <h1>Passus</h1>
 <p>Für die Berliner Software-Firma passus wurde ein neues Erscheinungsbild entwickelt. Neben dem Firmen-Logo wurde ein Corporate-Design entwicket, die sich auch auf die Software-Produktfamilie pharmadata erstreckt. Die Produktlogos und das Firmenlogo bilden eine Einheit. Grafisch wird die Familieneinheit office, pocket, compact und tablet erkennbar.</p>
 <p>• Gestaltung Logo, Geschäftsausstattung</p>

        </div>
        <div id="sidebar" className="content_sub" >
            <div className="clear">
            <BilderZeigen   collection = "passus" />
            </div>

        </div>
</div>

) }
