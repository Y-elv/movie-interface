

import './App.css'
import BigCard from './Components/Bigcard'
import Left from './Components/Leftside'
import Search from './Components/Search'

function App() {


  return (
    <div className="interface">
    <Left/>
    <div className='body'>
    <Search/>
    <div className="title">Trending</div>
    <div className='upper'>
     <BigCard/> 
     <BigCard/> 
     <BigCard/> 
     </div>
    </div>
    </div>
   
  )
}

export default App
