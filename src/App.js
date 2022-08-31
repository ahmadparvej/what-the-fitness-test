import {useState} from "react"
import {Box,Stack} from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx"
import { GymList } from './components/GymList';
import { Searchbar } from './components/Searchbar';

function App() {
  const [inputVal, setInputVal] = useState("")
  return (
    <Stack bg="black" color="white">
      <Navbar/>
      <Searchbar inputVal={inputVal} setInputVal={setInputVal}/>
      <GymList gymName={inputVal}/>
    </Stack>
  );
}

export default App;
