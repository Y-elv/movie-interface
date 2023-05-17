import MainLayout from "../Layout/Layout"
import BigCard from '../Components/Bigcard'
import img3 from '../assets/img/shang.jpeg'
import img from '../assets/img/imaga3.jpg'
import img2 from '../assets/img/netflix.jpg'
const Tvshow = () => {
    return (
        <>
            <MainLayout />
            <div className="interface">

                <div className='body'>

                    <div className="title">Tv Shows</div>
                    <div className='upper'>
                        <BigCard
                            img={img}
                            className="card"
                            classWord="words"
                            year="2019"
                            name="Beyond Earth"
                        />
                     
                     


                    </div>

                </div>
            </div>
        </>
    )
}
export default Tvshow