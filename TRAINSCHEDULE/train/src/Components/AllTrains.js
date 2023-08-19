
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { CardTrian } from './CardTrian';
import { Heading } from '@chakra-ui/react';

const StledContanier=styled.div`
padding: 50px;
`
export const AllTrains = () => {
    const [allTrainData, setAllTrainData] = useState([])
    const url = "http://20.244.56.144:80/train/trains";
    const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0NDI1MTksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYzE0NGFkMDctOWFmOS00NDlmLWIyNjktODM4YzEzZjA4MWIzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQjgxQTEyQjkifQ.yZUezHdrKCJMi_dSlUUAH54CITqMecDDua_58LTipjM'
    const fetchInfo = () => { 
        console.log("hai");
        return axios.get(url,
            {headers:{
            Authorization : `Bearer ${accessToken}`
        }}).then((response) =>setAllTrainData(response.data));
      }
      
      useEffect(() => { 
            fetchInfo(); 
      }, [])
      console.log(allTrainData);
  return (
    <StledContanier>
        <Heading>Train Application</Heading>
        {allTrainData.map((ele)=>
        {
            return <CardTrian ele={ele}/> 
        })

        }

    </StledContanier>
  )
}
