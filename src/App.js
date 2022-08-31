import { useState, useEffect} from "react"
import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx"
import { Routes, Route } from "react-router-dom"
import { GymPage } from './components/GymPage';
import Footer from './components/Footer.tsx';

function App() {
  const [inputVal, setInputVal] = useState("")
  return (
    <Box bg="black" color="white" m="0" p="0">
      <Navbar/>
      <Routes>
        <Route path="/" element={<GymPage/>} />
        <Route path="/gym" element={<GymPage/>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
