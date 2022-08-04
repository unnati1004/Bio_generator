import Button from 'react-bootstrap/Button';
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
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleChange(e)}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St"onChange={(e)=>handleChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" onChange={(e)=>handleChange(e)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  onChange={(e)=>handleChange(e)}/>
        </Form.Group>

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

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
    </div>
    <div>
          <Resume data={data}/>
    </div>
    </div>
  );
}

export default Generator;