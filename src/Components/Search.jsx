 import '../Css/Search.css'
import {SearchOutlined} from '@ant-design/icons'
 const Search =()=>{
    return (
        <div className='search-box'>
        <input type="text"placeholder="search for Movies or TV series"  />
        
        <SearchOutlined className="search-icon" />
        </div>
    )
 }
 export default Search