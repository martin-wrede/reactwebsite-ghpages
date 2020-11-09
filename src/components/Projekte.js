import React from  'react';
import '../App.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import BilderZeigen from "./image-slider";


export function Projekte () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">
        <h1>Projekte</h1>
<p><span class="text-markierung">Übersicht Referenzen</span></p>
<p><br />autenticon<br />
Berkenheger<br />
Diabetes Praxis, Berlin<br />
DM Drogerie Markt<br />EXPO 2000<br />
<a href="http://targetx.de/felix1/">felix1</a><br />
GIU<br /><
a href="http://targetx.de/hist-museum-bremerhaven/">Historisches Museum Bremerhaven</a><br />
Historisches Museum Saar<br /><a href="http://targetx.de/hu-berlin/">Humboldt Universität Berlin</a><br />J.J. Darboven<br />Kulturamt Bremen<br />myBet<br />NGBK Berlin<br /><a href="http://targetx.de/passus/">passus</a><br />Universität Karlsruhe / Fachbereich Informatik<br />Yello Strom<br />Ziener<br />ZKM / Zentrum für Kunst und Medientechnologie Karlsruhe</p>
        </div>
        <div id="sidebar" className="content_sub" >
            <div className="clear"></div>

        </div>
</div>

) }
