import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const Resume = ({ data, uploadedImage }) => {
    const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
//   console.log(uploadedImage);
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
      .post("https://libretranslate.de/translate", params, {
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
      .get("https://libretranslate.de/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  return (
    <div>
      <div style={style}>
        <img width="100%" ref={uploadedImage} />
      </div>
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
          </Form.Select>
        </Form.Group>
      <textarea>
        Hi, My name is {data.formGridName} from {data.formGridState} is Studing{" "}
        {data.formGridMajor} at {data.formGridSchool}.Currently work as{" "}
        {data.formGridOccupation}
      </textarea>
    </div>
  );
};

export default Resume;
