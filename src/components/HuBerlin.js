import React from  'react';

import '../App.css';
import BilderZeigen from "./image-slider";



export function HuBerlin () {

return (
<div className = "content_container" id="main">
        <div  className="content_main" id="content">


        <h1>Humboldt Universität Berlin</h1>
  <p>Pixtura wurde als webbasiertes E-Learning Tool an der Fakultät für Kunstwissenschaften der Humboldt Universität Berlin entwickelt.<br />
  Dozenten ermöglicht es, mithilfe einer Datenbank eigene Bild- und Textmaterialien aufzubereiten. Studenten können mit dem Coach Formen der Bildbeschreibung üben und sich theoretische Grundlagen erarbeiten.</p>
  <h2>1 Erscheinungsbild, Interface-Design</h2>
  <p>Logo-Gestaltung, Entwicklung des Erscheinungsbildes für Printmedien und Online</p>
  <h2>2 Projektwebsite</h2>
  <p>Eine Projektwebsite stellt den Coach vor.</p>
  <p>• HTML, JavaScript, CSS</p>
  <h2>3 Coach</h2>
  <p>Das webbasierte Tool bietet alle Lerninhalte an.<br />
  Hier wurde ein Interface-Design entwickelt, welches für Front-End und Back-End übergreifend aufbaut.<br />
  Die Dozenten können Lerninhalte und Übungen anlegen und Bild-Datenbanken verwalten.</p>
  <p>Die Studierenden haben die Möglichkeit mit Übungen spezifische Kentnisse zu vertiefen. Diese können automatisiert ausgewertet werden.</p>
  <p>• Interface-Design<br />
  •  Programmierung interaktiver Protoypen (JavaScript, JS-Libraries)</p>

        </div>
        <div id="sidebar" className="content_sub" >
            <div className="clear">
            <BilderZeigen   collection = "huBerlin" />
            </div>

        </div>
</div>

) }
