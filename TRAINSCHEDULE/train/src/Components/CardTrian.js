import React from 'react'
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';
const StyledDiv=styled.div`
padding: 8px;
width: 100%;
`

export const CardTrian = ({ele}) => {
    
    const TrainId=ele.trainNumber
    const navigate=useNavigate()
  return (
    <StyledDiv>
    <Card display="flex">
    <CardHeader display="flex" gap="10">
        <Box display={"flex"}>
        <Heading size='md'>Train Name:-</Heading>
         <Text>{ele.trainName}</Text>
        </Box>
        <Box display={"flex"}>
        <Text size='md'>Departure Time:-</Text>
         <Text>{ele.departureTime.Hours}:{ele.departureTime.Minutes}:{ele.departureTime.Seconds}</Text>
        </Box>
        <Box display={"flex"}>
        <Heading size='md'>Train Name:-</Heading>
         <Text>{ele.trainNumber}</Text>
        </Box>
    </CardHeader>
    <CardBody display="flex" gap="10px">
        <Card width={"300px"} height={"100px"}>
            <Flex justifyContent={"space-between"} padding={4}>
            <Heading size={"md"}>
            Sleeper
            </Heading>
            <Box>
           {ele.price.sleeper}
            </Box>
            </Flex>
            <Box display={"flex"} gap={2} padding={4}>
                <Text color={"green.500"}>Seat Available : -</Text>
                {" "}
                <Heading size={'sm'} color={"green.500"} marginTop={"1"}>{ele.seatsAvailable.sleeper}</Heading>
            </Box>
        </Card>
        <Card width={"300px"} height={"100px"}>
            <Flex justifyContent={"space-between"} padding={4}>
            <Heading size={"md"}>
            AC
            </Heading>
            <Box>
            {ele.price.AC}
            </Box>
            </Flex>
            <Box display={"flex"} gap={2} padding={4}>
                <Text color={"green.500"}>Seat availbele : -</Text>
                {" "}
                <Heading size={'sm'} color={"green.500"} marginTop={"1"}>{ele.seatsAvailable.AC}</Heading>
            </Box>
        </Card>
    </CardBody>
    </Card>
   </StyledDiv>
  )
}
