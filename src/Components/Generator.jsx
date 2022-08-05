import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Generator.css";
import { useState, useRef } from "react";
import Resume from "./Resume";
// import { Button } from 'bootstrap';
function Generator() {
  const [data, setData] = useState("");
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(id,value);
    setData({ ...data, [id]: value });
  };
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="form_gridview">
      <div className="form_data">
        <div style={{ backgroundColor: "rgb(146, 158, 129)" }}>
          <h1 style={{ marginLeft: "40%" }}>Options</h1>
        </div>
        <div className="mb-3">
          Profile Pic
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
          />
        </div>
        <div className="mb-3">
          Name
          <input
            type="text"
            name={"name"}
            placeholder="Enter name"
            onChange={(e) => handleChange(e)}
          />
          <select name="" id="">
            defaultValue="Choose..." onChange={(e) => handleChange(e)}
            <option>Choose...</option>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
          <button as={Row}>Random Name</button>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter location"
            onChange={(e) => handleChange(e)}
          />
          <button>Random Location</button>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter School name"
            onChange={(e) => handleChange(e)}
          />
          <button>Random School</button>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Major"
            onChange={(e) => handleChange(e)}
          />
          <button>Random Major</button>
        </div>
        <div className="mb-3">
          Occupation
          <input
            type="text"
            placeholder="Enter Occupation"
            onChange={(e) => handleChange(e)}
          />
          <button>Random Occupation</button>
        </div>
        <div className="mb-3">
          Religious Background
          <textarea name="" id="religion" cols="30" rows="10"></textarea>
          <button>Random Occupation</button>
        </div>
        <div className="mb-3">
          Reason for meeting with missionaries
          <textarea name="" id="reason" cols="30" rows="10"></textarea>
          <button style={{ backgroundColor: "rgb(244, 206, 129)" }}>
            Restoration
          </button>
          <button style={{ backgroundColor: "rgb(180, 241, 164)" }}>
            Plan of Salvation
          </button>
          <button style={{ backgroundColor: "rgb(164, 181, 241)" }}>
            Gospel of christ
          </button>
          <button style={{ backgroundColor: "rgb(241, 164, 197)" }}>
            Law of chastity
          </button>
          <button style={{ backgroundColor: "rgb(229, 164, 241)" }}>
            Word of wisdom
          </button>
          <button style={{ backgroundColor: "white" }}>Any Lesson</button>
        </div>
      </div>
      <div className="resume">
        <h1>Result</h1>
        <Resume data={data} uploadedImage={uploadedImage} />
      </div>
    </div>
  );
}

export default Generator;
