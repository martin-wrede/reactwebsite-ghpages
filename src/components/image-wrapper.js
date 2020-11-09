import React, { Component } from "react";


const image = {
 Design: "http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Interface-Design_E-Learning.jpg",
 CD: "http://targetx.de/wp-content/themes/targetx-responsive/caroussel/Ausstellung_Erscheinungsbild.jpg",
}

class BilderZeigen2  extends React.Component{
  constructor(props){
    super(props);
    this.value = this.props.value;
  }

  componentDidMount(){
      const img = new Image()
  //    img.src= image.design
      img.src = image[this.value]
      img.onload  = function() {
        document
        .querySelector('.imagewrapper-quer')
        .style['background-image']
        = `url('${img.src}')`
      }
  }

render(){
    return (
        <div>{this.value}
        <div className="imagewrapper-quer">
        </div>
        </div>
  );
}
}

export default BilderZeigen2;
