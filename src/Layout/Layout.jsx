import Left from "../Components/Leftside"
import Search from "../Components/Search"
import '../Css/MainLayout.css'

const MainLayout = ({ children }) => {
    return (
        <div className="layout">
            <Left />
            <Search />
             {children}

        </div>
    )
}
export default MainLayout