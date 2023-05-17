import { MdLocalMovies, MdMovieCreation } from 'react-icons/md';
import { Link } from 'react-router-dom'
import '../Css/leftside.css'
import img from '../assets/img/6522516.png'
import { CgMenuGridR } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { IoMdRadio } from "react-icons/io";
const Left = () => {
    return (
        <div className="containe">
            <div className="icon">
                <Link to="/" ><MdMovieCreation id="icon1" /> </Link >
                <div className="icons">
                    <Link to="/menu"> <CgMenuGridR /></Link>
                    <Link to="/theater"> <MdLocalMovies /></Link>
                    <Link to="/tv"><IoMdRadio /></Link>
                    <Link to="/bookmarked"> < CiBookmark /></Link>
                    <img src={img} id="profile" />
                </div>
            </div>
        </div>
    )

}
export default Left