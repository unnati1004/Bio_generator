import React, { useState, useEffect } from "react";
import axios from "axios";
const Resume = ({ data, uploadedImage }) => {
  console.log(data);
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState();
  const [output, setOutput] = useState("");
  // console.log(input);
  let style;
  if (uploadedImage.current == null) {
    style = {};
  } else {
    style = { width: "200px", height: "200px" };
  }
  const translate = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.com/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };
  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        setOptions(res.data);
      });
  }, []);

  return (
    <div>
      <div style={style}>
        <img width="100%" ref={uploadedImage} />
      </div>
      {data.name?(<h3>You are teaching {data.name}</h3>):""}  
      <select
        name=""
        id=""
        defaultValue="Choose..."
        onChange={(e) => setFrom(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          translate();
        }}
      >
        Translate
      </button>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default Resume;
