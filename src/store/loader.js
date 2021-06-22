import React from "react";

export default function Loader(props) {

  return (
      <div class="containerloader" style={{
                                        background:`url('${process.env.PUBLIC_URL}/beers/texture.png')`,
                                        backgroundSize: `100% 100%`,
                                        objectFit: "cover"
                                        
                                        }}>
       
        <div class="loader" >
            <div class="circle" id="a"></div>
            <div class="circle" id="b"></div>
            <div class="circle" id="c"></div>
            <div class="circle" id="d"></div>
            <div class="circle" id="e"></div>
        </div>
       
     </div>
  );
}
