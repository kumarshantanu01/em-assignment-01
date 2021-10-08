
import '../CSS/navbar.css';

const Navbar = () => {
    return(
        <>
         <div className='navbar'>
             <div className='left_text_navbar'>
                 <div className="textbox_left_text_navbar">
                     <h1>Equivalent Calculator</h1>
                 </div>
             </div>
             {/* <div className='right_text_navbar'>
                 <div className="textbox_right_text_navbar">
                     <ul>
                         <li>Home</li>
                         <li>OC</li>
                         <li>CS</li> 
                     </ul>
                 </div>
             </div> */}
         </div>
        </>
    );
}

export default Navbar;