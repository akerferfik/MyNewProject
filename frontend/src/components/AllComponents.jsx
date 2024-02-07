import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import About from "./About"
import Excursion from "./Excursion"
import Kabinet from "./Kabinet"


function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/excursions" element={<Excursion/>} />
                <Route path="/kabinet" element={<Kabinet/>} />
            </Route>
        </Routes>
    );
}

export default AllComponents;