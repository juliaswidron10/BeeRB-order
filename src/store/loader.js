import React from "react";

export default function Loader(props) {

  return (
      <div className="containerloader" style={{
                                        // background:`url('${process.env.PUBLIC_URL}/beers/texture.png')`,
                                        backgroundSize: `100% 100%`,
                                        objectFit: "cover"
                                        
                                        }}>
       
        <div className="loader" >
            <div className="circle" id="a"></div>
            <div className="circle" id="b"></div>
            <div className="circle" id="c"></div>
            <div className="circle" id="d"></div>
            <div className="circle" id="e"></div>
        </div>
       
     </div>
  );
}
