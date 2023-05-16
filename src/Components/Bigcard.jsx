import '../Css/Bigcard.css'
import { MdLocalMovies } from 'react-icons/md';

import { CiBookmark } from "react-icons/ci";
const BigCard = ({ className,classWord ,year,name,img}) => {
    return (
        <>
            <div className="container">

                <div className={className} style={{backgroundImage:`url(${img})`}}>

                   
                    < CiBookmark
                        className='bookmark' />

                </div>
                <div className={classWord}>
                    <div className="above">
                        <p>{year}</p>
                        <p><span>.</span> <MdLocalMovies className='iconn' />Movie</p>
                        <p><span>.</span>PG</p>

                    </div>
                    <div className="under">
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>

        </>


    )
}
export default BigCard