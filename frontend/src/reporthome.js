import { Link } from "react-router-dom";
function Reporthome(props){
    return(
        <>
        <Link to={`/viewreport/${props.id}`} ><h3>View Medical Report</h3></Link>
        

        </>
    )
};

export default Reporthome;