import React from "react";

const Resume = ({ data,uploadedImage }) => {
  console.log(uploadedImage);
let style
if(uploadedImage.current==null){
    style={}
}
else{
    style = {width:'200px',height:"200px"}
}
  return (
    <div>
            <div style={style}>
              <img width='100%' ref={uploadedImage} />
            </div>
      <h4>
        Hi, My name is {data.formGridName} from {data.formGridState} is Studing{" "}
        {data.formGridMajor} at {data.formGridSchool} Currently work as{" "}
        {data.formGridOccupation}
      </h4>
    </div>
  );
};

export default Resume;
