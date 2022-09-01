import React  from 'react'
import { Input, InputGroup, Text, InputRightElement, Button, Icon } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
import { Box } from '@chakra-ui/react';
export const Searchbar = ({inputVal,setInputVal}) => {
    
    const handleClick = ()=>{
        setInputVal("")
    }
  return (
    <Box p="2rem 4rem 1rem 4rem">
      <InputGroup size='md' border="2px solid white" bg="black" p="10px" borderRadius="10px" display="flex" alignContent="center">
      <Icon as={BiSearch} w={6} fontSize="2rem" m="auto 10px"/>
      <Input
        type="text"
        placeholder='Search gym name here...'
        value={inputVal}
        border="none"
        variant='unstyled'
        onChange={(e)=>setInputVal(e.target.value)}
      />
      <InputRightElement width='4.5rem' position="none">
        <Button colorScheme='red' variant='solid' size='sm' onClick={handleClick}>
          Clear
        </Button>
      </InputRightElement>
    </InputGroup>
    </Box>
  )
}
