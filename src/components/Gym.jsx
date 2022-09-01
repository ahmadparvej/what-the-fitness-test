import React from 'react'
import { Box, Heading, Flex, Icon, Stack, Button, Image } from '@chakra-ui/react';
import {FaLocationArrow} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"

export const Gym = ({data}) => {
    const {slug,address1,address2,distance_text,duration_text,city,total_rating} = data
    let rating = [0,0,0,0,0]
    for(let i=0;i<(Number(total_rating)) && i<5;i++){
        rating[i]=1
    }
  return (
      <Stack border="1px solid grey" p="1rem" borderRadius="10px" bgGradient='linear(to-r, #222222, black)'>
        <Flex p="1rem" direction={["column","column","row","row"]}>
            <Box w={["90%","90%","50%","50%"]} >
                <Image w="60px" src="https://media3.giphy.com/media/KiBlzxWmrXT6vfwL2c/giphy.gif?cid=6c09b95248c2b5f3ef0cb4aa4808c612994827587652d050&rid=giphy.gif&ct=s"/>
            </Box>
            <Flex w={["90%","90%","50%","50%"]} direction={["row","row","column","column",]} gap="1rem" justifyContent={["left","left","space-between","space-between"]}>
                <Box>
                    <Heading as="h1" size="md">{slug}</Heading>
                    <Heading as="h1" size="sm" fontWeight="400">{address1+" "+address2+" "+city}</Heading>
                </Box>
                <Box>
                    <Flex>
                        {rating.map((el,index)=>{
                            if(el===1){
                                return <Icon as={AiFillStar} key={index}/>
                            }
                            return <Icon as={AiOutlineStar} key={index}/>
                        })}
                    </Flex>
                    <Flex gap="0.5rem"><Icon as={FaLocationArrow} color="green" /><Heading as="h1" size="sm" fontWeight="400">{duration_text +" away "+distance_text}</Heading></Flex>
                </Box>
            </Flex>
        </Flex>
        <Flex p="2rem 0" justifyContent="space-between" alignContent="center">
            <Heading p="0" m="0" line-height="32px" size="md" fontWeight="100" color="gold">{"₹ 3600 for 3 Months"}</Heading>
            <Button colorScheme='red' variant='solid'>Book Now</Button>
        </Flex>
      </Stack>
  )
}
