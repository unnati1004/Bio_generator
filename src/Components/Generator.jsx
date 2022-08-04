
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Generator.css'
import { useState } from "react";
import Resume from './Resume';
function Generator() {
  const [data,setData] = useState("")
    const handleChange=(e)=>{
      const {id,value} = e.target;
      // console.log(id,value);
      setData({...data,[id]:value})
    }
  return (
    <div className='form_gridview'>
    <div className='form_data'>
    <Form>
    <h1>Options</h1>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFile">
          <Form.Label>Profile Pic</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name={'name'} placeholder="Enter name" onChange={(e)=>handleChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e)=>handleChange(e)}>
            <option>Choose...</option>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </Form.Select>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e)=>handleChange(e)}>
            <option>Choose...</option>
            <option>UP</option>
            <option>Maharastra</option>
            <option>Uttrakhand</option>
            <option>Bihar</option>
            <option>Tamil Nadu</option>
            <option>Andhra Pradesh</option>
            <option>Assam</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujara</option>
            <option>Rajasthan</option>
            <option>Karnataka</option>
            <option>Punjab</option>
            <option>Sikkim</option>
            <option>Himachal Pradesh</option>
            <option>Odisha</option>
          </Form.Select>
        </Form.Group>
      </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSchool">
          <Form.Label>School</Form.Label>
          <Form.Control type="text" placeholder="Enter School name" onChange={(e)=>handleChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMajor">
          <Form.Label>Major</Form.Label>
          <Form.Control type="text" placeholder="Enter Major" onChange={(e)=>handleChange(e)}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridOccupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" placeholder="Enter Occupation" onChange={(e)=>handleChange(e)}/>
        </Form.Group>
      </Row>
    </Form>
    </div>
    <div className='resume'>
           <h1>Result</h1>
          <Resume data={data}/>
    </div>
    </div>
  );
}

export default Generator;