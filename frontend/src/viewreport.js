import React, { useState, useEffect, useRef,useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteReport from './DeleteFeedback'
import axios from 'axios';
import { Route, Routes} from 'react-router-dom'
import UpdateReport from './UpdateFeedback';
import DisplayUploadedFiles from './uploadedfiles';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import viewcss from './viewreport.css'
import { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';

function Viewreport() {
    const {id}=useParams();
    const navigate = useNavigate();
    const pdfref=useRef();
    const [feedback, setfeedback] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
      
     const getreport=useMemo(()=>()=>{
      let url = "http://localhost:3001/feedback/view";
      
               axios
          .get(url)
          .then((res) => {
           //console.log(res.data)
            setfeedback(
               res.data );
           // console.log(res)
          })
          .catch((err) => {
            console.log('Error from feedback',err);
          });
      },);
      useEffect(() => {
           getreport();
                   },);

     console.log(feedback)
      const downloadpdf=()=>{
        const input=pdfref.current;
        const contentWidth = input.offsetWidth;
        const contentHeight = input.offsetHeight;
        const canvas = document.createElement('canvas');
    canvas.width = contentWidth;
    canvas.height = contentHeight;
    const context = canvas.getContext('2d');
    context.scale(2, 2);
        html2canvas(input).then((canvas)=>{
          const imgData = canvas.toDataURL('image/png');
          const pdf=new jspdf('p','mm','a3',true);
          const pdfwidth=pdf.internal.pageSize.getWidth();
          const pdfheight=pdf.internal.pageSize.getHeight();
          const ratio=Math.min(pdfwidth,pdfheight);
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.save('report.pdf');

        });
      };
     
    return (
      <>
      
      <div ref={pdfref} className='pdf-container'>
      <h3>Feedback Report</h3>
      

      <table >
        <tbody>
        
        {feedback?.length?feedback.map((feedback)=> (
          
          <div key={feedback.PID}>
          <tr>
            <th scope='row'>1</th>
            <td>Patient ID :</td>
            <td>{feedback.PID}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Patient Name :</td>
            <td>{feedback.Name}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Email:</td>
            <td>{feedback.Email}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Contact Number :</td>
            <td>{feedback.Cno}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Date of Visit :</td>
            <td>{feedback.Datevisit}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>How was it to schedule your appointment :</td>
            <td>{feedback.appointment}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>Service Quality :</td>
            <td>{feedback.management}</td>
          </tr>
          <tr>
            <th scope='row'>8</th>
            <td>Additional Comments :</td>
            <td>{feedback.additional}</td>
          </tr>
          <tr>
            <th scope='row'>9</th>
            <td>Would you recommend the dental clinic system? :</td>
            <td>{feedback.recommend}</td>
          </tr>
          <tr>
            <th scope='row'>10</th>
            <td>Rate of the experience :</td>
            <td>{feedback.rating}</td>
          </tr>
          <tr>
            <th scope='row'></th>
            
            <td><Link to="/updatefeed" >Update Feedback</Link></td>
            <td><Link to="/deletefeed" >Delete Feedback</Link></td>
            
          </tr><br></br></div>
        )):
            <td rowSpan={10} colSpan={10}>No Data Found</td>
}
          
         
        </tbody>
      </table>
     
      </div>
       <button onClick={downloadpdf}>Download Feedback Report</button>
       <button onClick={() => navigate('/feedbacksform')}>Next</button>
     
      </>
    );
  }
  
  export default Viewreport;
