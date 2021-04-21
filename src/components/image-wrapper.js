import React, { Component } from "react";

const image = {
  Design: "/media/Interface-Design_E-Learning.jpg",
  Projekte: "/media/Ausstellung_Erscheinungsbild.jpg",
  Kooperationen: "/media/Veranstaltungs-Praesentation.jpg",
  Kontakt: "/media/Info-Grafik.jpg",
};

class BilderZeigen2 extends React.Component {
  constructor(props) {
    // die Projektseiten liefern einen Wert
    // value="Design"
    super(props);
    this.value = this.props.value;
  }

  componentDidMount() {
    const img = new Image();
    //    img.src= image.design
    img.src = image[ this.value];
    img.onload = function () {
      document.querySelector(".imagewrapper-quer").style["background-image"] =
        //    = `url('${img.src}')`
        `url('${img.src}')`;
    };
  }

  render() {
    return (
      <div>
        {this.value}
        <div className="imagewrapper-quer"></div>
      </div>
    );
  }
}

export default BilderZeigen2;
