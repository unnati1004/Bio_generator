import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
const Resume = ({ data, uploadedImage }) => {
  console.log(data)
  let text = " "
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState();
  const [output, setOutput] = useState("");
  console.log(input);
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
        <select name="" id="" defaultValue="Choose..."
          onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        
      
      <div style={style}>
        <img width="100%" ref={uploadedImage} />
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
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
