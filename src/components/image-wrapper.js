import React  from "react";

const image = {
  Design:"https://i.pinimg.com/474x/31/a9/36/31a93614e46f83db6c15cb3d69730630.jpg",
//  Design: "/media/Interface-Design_E-Learning.jpg",
  Projekte: "./media/Ausstellung_Erscheinungsbild.jpg",
  Kooperationen: "/media/Veranstaltungs-Praesentation.jpg",
  Kontakt: "media/Info-Grafik.jpg",
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
      document.querySelector(".imagewrapper-quer").style["background-image"] =
        //    = `url('${img.src}')`
        `url('${img.src}')`;
    };
  }

  render() {
    return (
      <div>

        <div className="imagewrapper-quer"></div>
        {this.value}
      </div>
    );
  }
}

export default BilderZeigen2;
