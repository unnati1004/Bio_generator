
import "./Generator.css";
import { useState, useRef } from "react";
import Resume from "./Resume";
import { useEffect } from "react";
import axios from "axios";
function Generator() {
  const [data, setData] = useState("");
  const [data1,setData1] = useState("");
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [name,setname] = useState("");
  const [loc,setLoc] = useState("");
  const [School,setSchool] = useState("");
  const [maj,setMaj] = useState("");
  const [occ,setOcc] = useState("");
  const [reg,setReg] = useState("");
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
  useEffect(()=>{
      axios.get('https://anoxco0-product.herokuapp.com/randomprofiles').then(({data})=>{
        // console.log(data[0].names)
        setData1(data);

      }).catch((e)=>{
        console.log(e.message)
      })
  },[])
    
  const handlenames=(max)=>{
     var n = Math.floor(Math.random() * max);
     setname(data1[0].names[n].name)
     setData({ ...data, ['name']: data1[0].names[n].name });
  }
  const handleloc=(max)=>{
     var n = Math.floor(Math.random() * max);
     setLoc(data1[0].locations[n])
     setData({ ...data, ['location']: data1[0].locations[n] });
  }
  const handleschool=(max)=>{
     var n = Math.floor(Math.random() * max);
     setSchool(data1[0].schools[n]);
     setData({ ...data, ['school']: data1[0].schools[n] });
  }
  const handlemaj=(max)=>{
     var n = Math.floor(Math.random() * max);
     setMaj(data1[0].degrees[n]);
     setData({ ...data, ['major']: data1[0].degrees[n] })
  }
  const handleocc=(max)=>{
     var n = Math.floor(Math.random() * max);
     setOcc(data1[0].occupations[n])
     setData({ ...data, ['occu']: data1[0].occupations[n] })
  }
  const handlereligion=(max)=>{
     var n = Math.floor(Math.random() * max);
     setReg(data1[0].religious_backgrounds[n].description)
     setData({ ...data, ['religion']: data1[0].religious_backgrounds[n].description })
  }




  return (
    <div className="form_gridview">
      <div className="form_data">
        <div className="mb-3">
          <h1>Options</h1>
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
          video
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            // ref={videoUploader}
          />
        </div>
        <div className="mb-3">
          Name
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          Gender
          <select
            name=""
            id="gender"
            defaultValue="Choose..."
            onChange={(e) => handleChange(e)}
          >
            <option>Choose...</option>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
          <button onClick={()=>{handlenames(data1[0].names.length)}}>Random Name</button>
        </div>
        <div className="mb-3">
          Location
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={loc}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={()=>{handleloc(data1[0].locations.length)}} >Random Location</button>
        </div>
        <div className="mb-3">
          School
          <input
            type="text"
            id="school"
            value={School}
            placeholder="Enter School name"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={()=>{handleschool(data1[0].schools.length)}}>Random School</button>
        </div>
        <div className="mb-3">
          Major
          <input
            type="text"
            id="major"
            value={maj}
            placeholder="Enter Major"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={()=>{handlemaj(data1[0].degrees.length)}}>Random Major</button>
        </div>
        <div className="mb-3">
          Occupation
          <input
            type="text"
            id="occu"
            value={occ}
            placeholder="Enter Occupation"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={()=>{handleocc(data1[0].occupations.length)}}>Random Occupation</button>
        </div>
        <div className="mb-3">
          <div>
          Religious Background
          </div>
          <textarea name="" id="religion" value={reg} onChange={(e) => handleChange(e)}></textarea>
          <button onClick={()=>{handlereligion(data1[0].religious_backgrounds.length)}}>Random Religion</button>
        </div>
        <div className="mb-3">
          <div>
          Reason for meeting with missionaries
          </div>
          <div>
          <textarea name="" id="reason" onChange={(e) => handleChange(e)}></textarea>
          </div>
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
        <div >
        <h1>Result</h1>
        </div>
        <Resume data={data} uploadedImage={uploadedImage} />
      </div>
    </div>
  );
}

export default Generator;
