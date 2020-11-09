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
              {id:1 , text:'Plakat', url: 'media/pixtura-plakat.jpg'},
              {id:2 , text:'Faltblatt', url: 'media/pixtura-faltblatt.jpg'},
              {id:3 , text:'Projekt-Website', url: 'media/hu_berlin_website.jpg'},
          ],
          [
            {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
            {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
            {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
            {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
            {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
          ],
                [

                  {id:1 , text:'Plakat', url: 'media/pixtura-plakat.jpg'},
                  {id:2 , text:'Faltblatt', url: 'media/pixtura-faltblatt.jpg'},
                  {id:3 , text:'Projekt-Website', url: 'media/hu_berlin_website.jpg'},
                  {id:4 , text:'E-Learning Coach Frontend', url: 'media/hu_berlin_uebung02.jpg'},
                  {id:5 , text:'E-Learning Coach Backend', url: 'media/hu_berlin_autoren.jpg'}
                ],
              [
                      {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
                      {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
                      {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
                      {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
                      {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
                    ],
                    [
                    {id:1 , text:'Erscheinungsbild mit Logo', url: 'media/passus-logo-claim.jpg'},
                    {id:2 , text:'Briefbogen, Visitenkarte', url: 'media/passus_set1000.jpg'},
                    {id:3 , text:'Visitenkarte', url: 'passus_set1000-detail.jpg'}

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
  if (props.collection === "huerlin") {
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
