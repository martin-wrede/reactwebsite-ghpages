import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
//import Logo from "./media01.jpg";




function BilderZeigen (props) {

let array_var =   props.collection;

let  items = [];

const  archiv = [
            [
              {id:1 , text:'Interface-Design E-Learning', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
              {id:2 , text:'Erscheinungsbild', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
              {id:3 , text:'Plakat Kulturveranstaltung ', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
              {id:4 , text:'Veranstaltungs-Werbung', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
              {id:5 , text:'Info-Grafik', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
            ],
            [
            {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
            {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
            {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
            {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
            {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
          ],
          [
            {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
            {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
            {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
            {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
            {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
          ],
                [
                  {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
                  {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
                  {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
                  {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
                  {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
                ],
              [
                      {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
                      {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
                      {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
                      {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
                      {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
                    ],
                    [
                    {id:1 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg'},
                    {id:2 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg'},
                    {id:3 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Plakat_Kulturveranstaltung.jpg'},
                    {id:4 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Veranstaltungs-Praesentation.jpg'},
                    {id:5 , text:'Projektbeispiel', url: 'http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Info-Grafik.jpg'}
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
  if (props.collection === "huBerlin") {
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
