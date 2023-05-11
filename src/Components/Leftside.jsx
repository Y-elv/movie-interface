import { MdLocalMovies,MdMovieCreation } from 'react-icons/md';
import '../Css/leftside.css'
import { CgMenuGridR } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { IoMdRadio } from "react-icons/io";
const Left=()=>{
    return(
        <div className="containe">
         <div className="icon">
         <MdMovieCreation id="icon1"/>
         <div className="icons">
         <CgMenuGridR/>
         <MdLocalMovies />
         <IoMdRadio/>
        < CiBookmark/>
        </div>
         </div>
        </div>
    )

}
export default Left