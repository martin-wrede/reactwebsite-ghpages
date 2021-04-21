import React  from "react";

const image = {

  Design: "/media/Interface-Design_E-Learning.jpg",
  Projekte: "/public/media/Ausstellung_Erscheinungsbild.jpg",
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

    img.src = image[this.value];
    img.onload = function () {
       document.querySelector(".imagewrapper-quer").style["background-image"]
        = `url('${img.src}')`

    };
  }

  render() {
    return (
      <div>
      {/*
        <div className="imagewrapper-quer"></div>
  {this.value}
      */}

     <img src={ process.env.PUBLIC_URL  + '/media/' + this.value +  '.jpg'}
     width='100%'
      alt={this.value} />

      </div>
    );
  }
}

export default BilderZeigen2;
