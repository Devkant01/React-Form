import Form  from "./Components/Form"
import Header  from "./Components/Header"
import Data from "./Components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="w-screen h-full bg-gray-200">
            <Header />
            </div>
            <Routes>
                <Route path="/" element={<Form /> } />
                <Route path="/home" element={<Data />} />
            </Routes>
        </Router>
    )
}


export default App;