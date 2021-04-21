import React from  'react';

import '../App.css';

import BilderZeigen from "./image-slider";
import BilderZeigen2 from "./image-wrapper";


export function Home () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">

<BilderZeigen   collection = "home" />

  <h1>targetx</h1>
<p><span class="text-markierung"> Medien-Design &#8211; Martin Wrede</span></p>
<p>Visuelle Erscheinungsbilder für Unternehmen und Institutionen (Grafik-Design, Online) und die Umsetzung von Website ist der Schwerpunkt.<br />
Dazu gehören individuelle Anpassungen von CMS wie WordPress oder Redaxo.</p>


        </div>
        <div id="sidebar" className="content_sub" >

            <div className="clear"></div>

        </div>
</div>

) }
