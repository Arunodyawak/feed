import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Route, Routes} from 'react-router-dom'
import Reporthome from './reporthome'
import Viewreport from "./viewreport";
import UpdateReport from "./UpdateFeedback";
import DeleteReport from "./DeleteFeedback";
import DisplayUploadedFiles from "./uploadedfiles";
import "./FeedbackForm.css";
import Feedbacksform from "./Thankyou";
import Header from "./Header";
import Footer from "./Footer";

function CreateReport(props) {
  const navigate = useNavigate();
 
  const inputEl = useRef(null);
  let incorret="";
  let [errors, setErrors] = useState("");
  const [feedback, setfeedback] = useState({
    PID: "",
    Name: "",
    Email: "",
    Cno: "",
    Datevisit: "",
    appointment: "",
    rating: "",
    management: "",
    additional: "",
    recommend: "",
  });

  
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'PID' && !(/^[0-9]*$/).test(value)) {
      // If it's not a number, display an alert and return
      console.log('Patient ID must be numeric.');
      return;
    }
    setfeedback({...feedback, [e.target.name]: e.target.value });
    console.log(feedback);
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    errors = {};
  if (!feedback.PID.trim()) {
    errors.PID = 'Patient ID is required.';
    inputEl.current.focus();
    incorret="incorrect input";
  }
  if (!feedback.Name.trim()) {
    errors.Name = 'Patient Name is required.';
  }
  if (!feedback.Email.trim()) {
    errors.Email = 'Patient Email is required.';
    
  }
  
  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }
    await axios
      .post("http://localhost:3001/feedback/create", feedback)
      .then((res) => {
       navigate("/viewfeedbacks");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const repui=(<>
  <header className="App-header">
  <p className="P1">IVORY Dental Care How feel you!</p>
  <p className="P2">Can you add your valuable feedback It's very important for us</p> 
  <h1 className = "font" >Feedback Form</h1>
  
  </header>        
  <form onSubmit={onSubmit} className="form-container">

    <label className="letters"> Patient ID :</label>
      <input required ref={inputEl}
        type="number"
        placeholder="ID of the Patient"
        name="PID"
        value={feedback.PID}
        onChange={onChange}
      /> {incorret}
      <br />
    
    <br />
    
    <label className="letters"> Patient Name :</label>
      <input required
        type="text"
        placeholder="Name of the Patient"
        name="Name"
        value={feedback.Name}
        onChange={onChange}
      />
    
    <br />
    
    <label className="letters"> Email :</label>
      <input required
        type="email"
        placeholder="Email of the Patient"
        name="Email"
        value={feedback.Email}
        onChange={onChange}
      />
    
    <br />
    
    <label className="letters"> Contact Number :</label>
      <input
        type="number"
        placeholder="Contact No."
        name="Cno"
        value={feedback.Cno}
        onChange={onChange}
      />
    
    <br />
    
    <label className="letters"> Date of Visit :</label>
      <input
        type="date"
        name="Datevisit"
        value={feedback.Datevisit}
        onChange={onChange}
      />
    
    <br />
    <p className="p">How easy was it to schedule your appointment using our system?</p>
    <label className="radiobtn">Easy </label>
      <input
      className="radio-input"
        type="radio"
        name="appointment"
        value="easy"
        onChange={onChange}
      />
      <br></br>
      <label className="radiobtn">Neutral </label>
      <input
      className="radio-input"
        type="radio"
        name="appointment"
        value="neutral"
        onChange={onChange}
      />
      <br></br>
      <label className="radiobtn">Difficult </label>
      <input
      className="radio-input"
        type="radio"
        name="appointment"
        value="difficult"
        onChange={onChange}
      />
      <br></br>
      <label className="radiobtn">Complex </label>
      <input
      className="radio-input"
        type="radio"
        name="appointment"
        value="complex"
        onChange={onChange}
      />
      <br></br>
      <p className="p">How satisfied are you with our service quality ?</p>
    <label className="radiobtn">Poor </label>
      <input
      className="radio-input"
        type="radio"
        name="management"
        value="poor"
        onChange={onChange}
      />
      <label className="radiobtn">Normal </label>
      <input
      className="radio-input"
        type="radio"
        name="management"
        value="normal"
        onChange={onChange}
      />
      <label className="radiobtn">Good </label>
      <input
      className="radio-input"
        type="radio"
        name="management"
        value="good"
        onChange={onChange}
      />
      <label className="p"> Additional comments :</label>
      <input 
        type="text"
        placeholder="Additional comments"
        name="additional"
        value={feedback.additional}
        onChange={onChange}
      />
      <p className="p">Would you recommend our dental clinic to others ?</p>
      <div className="recommendation-label">
  <label htmlFor="recommendYes">Yes</label>
  <input
    className="radio-input"
    type="radio"
    id="recommendYes"
    name="recommend"
    value="yes"
    onChange={onChange}
  />
  
  <label htmlFor="recommendNo">No</label>
  <input
    className="radio-input"
    type="radio"
    id="recommendNo"
    name="recommend"
    value="no"
    onChange={onChange}
  />
  
  <label htmlFor="recommendMaybe">Maybe</label>
  <input
    className="radio-input"
    type="radio"
    id="recommendMaybe"
    name="recommend"
    value="maybe"
    onChange={onChange}
  />
</div>
      <p className="p">Rate your experience:</p>

<div class="rating">
  <input type="radio" id="star5" name="rating" value="5"  onChange={onChange}/>
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4"  onChange={onChange}/>
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3"  onChange={onChange}/>
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" onChange={onChange}/>
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1"  onChange={onChange}/>
  <label for="star1"></label>
</div>
      
      <br></br>
    <button
      type="submit" className ='submit-botton'
      >
      Submit
    </button>
  </form></>
  );


  return (
    <>
    <Header></Header>
     
     <Routes>
      <Route path='/' element={repui}></Route>
      <Route path='/viewfeedbacks' element={<Viewreport></Viewreport>}></Route>
      <Route path='/updatefeed' element={<UpdateReport id={feedback.PID}></UpdateReport>}></Route>
      <Route path='/deletefeed' element={<DeleteReport id={feedback}></DeleteReport>}></Route>
      <Route path='/feedbacksform' element={<Feedbacksform></Feedbacksform>}></Route>
    </Routes>
            

    
    <Footer></Footer>
  
     </>
  );
};

export default CreateReport;