import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
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
        <Form>
          <div style={{ backgroundColor: "rgb(146, 158, 129)" }}>
            
            <h1 style={{marginLeft:"40%"}}>Options</h1>
          </div>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={5}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

          {/* <Row className="mb-3" sm={3}> */}
            <Form.Group as={Row} className="mb-3" controlId="formGridProfile">
              <Form.Label column sm={2}>Profile Pic</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
              />
              </Col>
            </Form.Group>
          {/*  */}
          
            <Form.Group as={Row} sm={3} className="mb-3" controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="text"
                name={"name"}
                placeholder="Enter name"
                onChange={(e) => handleChange(e)}
              />
              </Col>
            {/* </Form.Group>
            <Form.Group as={Row} sm={3} controlId="formGridGender"> */}
              <Form.Label>Gender</Form.Label>
              <Col sm={5}>

              <Form.Select
                defaultValue="Choose..."
                onChange={(e) => handleChange(e)}
              >
                <option>Choose...</option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </Form.Select>
              </Col>
              {/* </Form.Group> */}
              {/* <Form.Group as={Row} sm={3} controlId="formGridGender"> */}
              <button as={Row}>Random Name</button>
              </Form.Group>
           
          
          
            <Form.Group as={Row} className="mb-3"  sm={3} controlId="formGridState">
              <Form.Label>Location</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="text"
                placeholder="Enter location"
                onChange={(e) => handleChange(e)}
              />
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={3} controlId="formGridGender">
              <button>Random Location</button>

            </Form.Group>
          
         
            <Form.Group as={Row} className="mb-3"  sm={3} controlId="formGridSchool">
              <Form.Label>School</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="text"
                placeholder="Enter School name"
                onChange={(e) => handleChange(e)}
              />
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={3} controlId="formGridGender">

              <button>Random School</button>
            </Form.Group>
          
          
            <Form.Group as={Row} className="mb-3"  sm={3} controlId="formGridMajor">
              <Form.Label>Major</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="text"
                placeholder="Enter Major"
                onChange={(e) => handleChange(e)}
              />
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={3} controlId="formGridGender">
              <button>Random Major</button>
            </Form.Group>
          
          
            <Form.Group as={Row} className="mb-3"  sm={3} controlId="formGridOccupation">
              <Form.Label>Occupation</Form.Label>
              <Col sm={5}>

              <Form.Control
                type="text"
                placeholder="Enter Occupation"
                onChange={(e) => handleChange(e)}
              />
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={3} controlId="formGridGender">
            <button>Random Occupation</button>
              </Form.Group>
          
        </Form>
      </div>
      <div className="resume">
        <h1>Result</h1>
        <Resume data={data} uploadedImage={uploadedImage} />
      </div>
    </div>
  );
}

export default Generator;
