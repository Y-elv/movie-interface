


import './App.css'
import img3 from './assets/img/shang.jpeg'
import img from './assets/img/imaga3.jpg'
import img2 from './assets/img/netflix.jpg'
import BigCard from './Components/Bigcard'

import MainLayout from './Layout/Layout'

function App() {


  return (
    <>
         <MainLayout/>
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
           img={img}
            className="card"
            classWord="words"
            year="2020"
            name="Queens and King"
             />
               <BigCard
           img={img2}
            className="card"
            classWord="words"
            year="2020"
            name="Queens and King"
             />
             
        </div>
        <div className="title">Recommended for you</div>
        <div className='under'>
      
          <BigCard
           img={img}
            className="card1"
            year="2021"
            name="The Twins"
          />
          <BigCard
           img={img}
            className="card1" 
            year="2021"
            name="Miss you"
            
            />
          <BigCard
           img={img2}
            className="card1"
            year="2020"
            name="Teen Wolf" />
          <BigCard
              img={img}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
           
        
            <BigCard
           img={img}
            className="card1"
            year="2021"
            name="The Twins"
          />
          <BigCard
           img={img3}
            className="card1" 
            year="2021"
            name="Miss you"
            
            />
          <BigCard
           img={img}
            className="card1"
            year="2020"
            name="Teen Wolf" />
          <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
             <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
            <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
              <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
               <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
               <BigCard
              img={img2}
            className="card1" 
            year="2023"
            name="Beyond The sun"
            />
           
           
            </div>
        </div>
      </div>
   
      </>

  )
}

export default App
