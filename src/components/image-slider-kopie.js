import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
//import Logo from "./media01.jpg";

function BilderZeigen (props) {

let array_var =   props.collection;

let  items = [];

const  archiv = [
            [
              {id:1 , text:'Projektbeispiel', url: 'media/Interface-Design_E-Learning.jpg'},
              {id:2 , text:'Projektbeispiel', url: 'media/Ausstellung_Erscheinungsbild.jpg'},
              {id:3 , text:'Projektbeispiel', url: 'media/Plakat_Kulturveranstaltung.jpg'},
              {id:4 , text:'Projektbeispiel', url: 'media/Veranstaltungs-Praesentation.jpg'},
              {id:5 , text:'Projektbeispiel', url: 'media/Info-Grafik.jpg'}
            ],
            [
              {id:1 , text:'Info Grafik', url: 'http://targetx.de/wp-content/uploads/photo-gallery/felix1_steuerberater_INFOGRAFIK_WEB.png?bwg=1576046117'},
              {id:2 , text:'UI Design', url: 'http://targetx.de/wp-content/uploads/photo-gallery/felix1_steuerberater_katalog_WEB.png?bwg=1576046117'},
              {id:3 , text:'Fehlerseite Design', url: 'http://targetx.de/wp-content/uploads/photo-gallery/felix1_steuerberater_Steuermonster_WEB.png?bwg=1576046117'}
          ],
          [
            {id:1 , text:'Lakonia: Außenansicht', url: 'http://targetx.de/wp-content/uploads/photo-gallery/LAKONIA-Ausstellung-01.jpg'},
            {id:2 , text:'Lakonia: Innenansicht', url: 'http://targetx.de/wp-content/uploads/photo-gallery/LAKONIA-Ausstellung-02.jpg'},
            {id:3 , text:'Lakonia: Falblatt', url: 'http://targetx.de/wp-content/uploads/photo-gallery/LAKONIA-01-Faltblatt.jpg'},
            {id:4 , text:'Lakonia: Buchseiten', url: 'http://targetx.de/wp-content/uploads/photo-gallery/LAKONIA-Buch-05.jpg'},
            {id:5 , text:'Lakonia: Buchseiten', url: 'http://targetx.de/wp-content/uploads/photo-gallery/LAKONIA-Buch-07.jpg'}
          ],
                [

                  {id:1 , text:'Logo', url: 'http://targetx.de/wp-content/uploads/photo-gallery/pixtura-logo.png'},
                  {id:2 , text:'Faltblatt', url: 'http://targetx.de/wp-content/uploads/photo-gallery/pixtura-faltblatt.jpg'},
                  {id:3 , text:'Projekt-Website', url: 'http://targetx.de/wp-content/uploads/photo-gallery/hu_berlin_website.jpg'},
                  {id:4 , text:'E-Learning Coach Frontend', url: 'http://targetx.de/wp-content/uploads/photo-gallery/hu_berlin_uebung02.jpg'},
                  {id:5 , text:'E-Learning Coach Backend', url: 'http://targetx.de/wp-content/uploads/photo-gallery/hu_berlin_autoren.jpg'}
                ],

                    [
                    {id:1 , text:'Erscheinungsbild mit Logo', url: 'http://targetx.de/wp-content/uploads/photo-gallery/passus-logo-claim.jpg'},
                    {id:2 , text:'Briefbogen, Visitenkarte', url: 'http://targetx.de/wp-content/uploads/photo-gallery/passus_set1000-detail.jpg'},
                    {id:3 , text:'Visitenkarte', url: 'http://targetx.de/wp-content/uploads/photo-gallery/passus-logo-claim.jpg'}

                  ]
  ];

  if (props.collection === "home") {
     items = archiv[0];
  }
  if (props.collection === "felix1") {
     items = archiv[1];
  }
  if (props.collection === "histMuseumBremerhaven") {
     items = archiv[2];
  }
  if (props.collection === "huberlin") {
     items = archiv[3];
  }
  if (props.collection === "passus") {
     items = archiv[4];
  }

    return (
        <div>
        <Carousel    style={{
           width: "100%",
           height: "100%"
          }}>
      {items.map(item => <div key={item.id}
        style={{
         backgroundColor: "#fff",
         width: "100%",
         height: "100%"
        }}
        > <img src={item.url} alt={item.text}
        style={{
         width: "100%",
         height: "100%"
        }}
         /><br />  <span
         style={{
        paddingLeft: "5px"
         }}
         >{item.text}</span>

         </div>)}
      </Carousel>
        </div>
  );
}

 export default BilderZeigen;
