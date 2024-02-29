import {  Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Header = () => {


  return (
 
      <div
      style={{
        display:'flex',
        justifyContent:'end',
        border:'1px solid white',
        boxShadow:'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        backgroundColor:'white',
        height:'50px',
        padding:'10px',

      }}
      
       >
       
        <div className="flex gap-2">
        <Link to="/">
            <Typography color="blue">Add todo</Typography>
          </Link>
          <Link to="/view-songs">
            <Typography color="blue">View todo</Typography>
          </Link>
        </div>
        
          
        

         
        </div>

     
   
  );
};
export default Header;
