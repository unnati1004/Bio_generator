import React from "react";

const Resume = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>
        Hi, My name is {data.formGridName} from {data.formGridState} is Studing{" "}
        {data.formGridMajor} at {data.formGridSchool} Currently work as{" "}
        {data.formGridOccupation}
      </h4>
    </div>
  );
};

export default Resume;
