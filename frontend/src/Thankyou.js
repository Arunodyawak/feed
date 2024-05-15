import { useNavigate } from 'react-router-dom';
import './Thankyou.css';
import Header from './Header';
import Footer from './Footer';




function Feedbacksform() {

  const navigate = useNavigate();

  return (
    <div className="App">
      
      <header className="App-header">
        
        <p className="P1">Thanks for your valuable response!</p>
         
        
      </header>
     
    </div>
  );
}

export default Feedbacksform;