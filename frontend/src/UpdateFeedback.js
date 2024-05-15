import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Route, Routes} from 'react-router-dom'
import Reporthome from './reporthome'
import Viewreport from "./viewreport";
import updatecss from './updatereportcss.css'
import "./UpdateFeedback.css"
import Header from "./Header";
import Footer from "./Footer";


function UpdateFeedback(props) {
  console.log(props.id);
  const navigate = useNavigate();
    const [feedback, setfeedback] = useState({});
    const [selectedAppointment, setSelectedAppointment] = useState("");
  const [selectedManagement, setSelectedManagement] = useState("");
  const [selectedRecommendation, setSelectedRecommendation] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

      const getreport=()=>{
        axios
         .get(`http://localhost:3001/feedback/${props.id}`)
         .then((res) => {
           console.log(res.data[0].Age,"dcdc")
           setfeedback({
               PID: res.data[0].PID,
               Name: res.data[0].Name,
               Email: res.data[0].Email,
               Cno: res.data[0].Cno,
               Datevisit: res.data[0].Datevisit,
               appointment: res.data[0].appointment,
               rating: res.data[0].rating,
               management: res.data[0].management,
               additional: res.data[0].additional,
               recommend: res.data[0].recommend,
             });
             setSelectedAppointment(res.data[0].appointment);
        setSelectedManagement(res.data[0].management);
        setSelectedRecommendation(res.data[0].recommend);
        setSelectedRating(res.data[0].rating);
           console.log(res)
         })
         .catch((err) => {
           console.log('Error from feedback',err);
         });
     }

  useEffect(() => {
    if (props.id) {
      getreport();
      console.log(" getreport working")
    }
  }, [props.id]);

  console.log(feedback)

  const onChange = (e) => {
    setfeedback({...feedback, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios
      .put("http://localhost:3001/feedback/update", feedback)
      .then((res) => {
                      navigate(`/viewfeedbacks`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <>
      
      <div className="updateTable">
      
            
            <form onSubmit={onSubmit}>

            <h3>Update Feedback</h3>
          
            <label> Patient ID :</label>
      <input required
        type="number"
        placeholder="ID of the Patient"
        name="PID"
        value={feedback.PID}
        onChange={onChange}
      /> 
      <br />
    
    <br />
    
    <label> Patient Name :</label>
      <input required
        type="text"
        placeholder="Name of the Patient"
        name="Name"
        value={feedback.Name}
        onChange={onChange}
      />
    
    <br />
    
    <label> Email :</label>
      <input required
        type="email"
        placeholder="Email of the Patient"
        name="Email"
        value={feedback.Email}
        onChange={onChange}
      />
    
    <br />
    
    <label> Contact Number :</label>
      <input
        type="number"
        placeholder="Contact No."
        name="Cno"
        value={feedback.Cno}
        onChange={onChange}
      />
    
    <br />
    
    <label> Date of Visit :</label>
      <input
        type="date"
        name="Datevisit"
        value={feedback.Datevisit}
        onChange={onChange}
      />
    
    <br />
    <p>How easy was it to schedule your appointment using our system?</p>
    <label className="radiobtn">Easy </label>
      <input
      className="radio-input"
        type="radio"
        name="appointment"
        value="easy"
        checked={selectedAppointment === "easy"}
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
      <p>How satisfied are you with our service quality ?</p>
    <label className="radiobtn">Poor </label>
      <input
      className="radio-input"
        type="radio"
        name="management"
        value="poor"
        checked={selectedManagement === "poor"}
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
      <label> Additional comments :</label>
      <input 
        type="text"
        placeholder="Additional comments"
        name="additional"
        value={feedback.additional}
        onChange={onChange}
      />
      <p>Would you recommend our dental clinic to others ?</p>
      <div className="recommendation-label">
  <label htmlFor="recommendYes">Yes</label>
  <input
    className="radio-input"
    type="radio"
    id="recommendYes"
    name="recommend"
    value="yes"
    checked={selectedRecommendation === "yes"}
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
      <p>Rate your experience:</p>

<div class="rating">
  <input type="radio" id="star5" name="rating" value="5"  onChange={onChange} checked={selectedRating === "5"}/>
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4"  onChange={onChange} checked={selectedRating === "4"}/>
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3"  onChange={onChange} checked={selectedRating === "3"}/>
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" onChange={onChange} checked={selectedRating === "2"}/>
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1"  onChange={onChange} checked={selectedRating === "1"}/>
  <label for="star1"></label>
</div>
              
              <button
                type="submit">
                Update
              </button>
            </form>
            </div>
           
      </>
    );
  }
  
  export default UpdateFeedback;