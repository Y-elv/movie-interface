import MainLayout from "../Layout/Layout"
import BigCard from '../Components/Bigcard'
import img3 from '../assets/img/shang.jpeg'
import img from '../assets/img/imaga3.jpg'
import img2 from '../assets/img/netflix.jpg'
const Menu = () => {
  return (
    <>
      <MainLayout />
      <div className="interface">

        <div className='body'>

          <div className="title">Trending</div>
          <div className='upper'>
            <BigCard
              img={img}
              className="card"
              classWord="words"
              year="2019"
              name="Beyond Earth"
            />
            <BigCard
              img={img2}
              className="card"
              classWord="words"
              year="2018"
              name="Dear Mama"

            />
            <BigCard
              img={img3}
              className="card"
              classWord="words"
              year="2020"
              name="Queens and King"
            />


          </div>

        </div>
      </div>
    </>
  )
}
export default Menu