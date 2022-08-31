import React,{useState} from 'react'
import { Input, InputGroup, Text, InputRightElement, Button, Icon } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
export const Searchbar = ({inputVal,setInputVal}) => {
    
    const handleClick = ()=>{
        setInputVal("")
    }
  return (
    <InputGroup size='md' border="2px solid white" bg="black" p="10px" borderRadius="10px" display="flex" alignContent="center">
      <Icon as={BiSearch} w={6} fontSize="2rem" m="auto 10px"/>
      <Input
        // p='0.5rem'
        type="text"
        placeholder='Search gym name here...'
        value={inputVal}
        border="none"
        variant='unstyled'
        onChange={(e)=>setInputVal(e.target.value)}
      />
      <InputRightElement width='4.5rem' position="none">
        <Button size='sm' onClick={handleClick} bg="#920909">
          Clear
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
