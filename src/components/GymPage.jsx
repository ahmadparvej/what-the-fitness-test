import React,{useState, useEffect} from 'react'
import { Searchbar } from './Searchbar';
import { GymList } from './GymList';
import { HeroImage } from './HeroImage';
import { Stack } from '@chakra-ui/react';

export const GymPage = () => {
    const [inputVal, setInputVal] = useState("")
    const [geoLocation, setGeoLocation] = useState({})

    //Get Users GeoLocation
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        let obj = {
          lat:position.coords.latitude,
          long:position.coords.longitude
        }
        setGeoLocation(obj)
      });
    }, [])
    
  return (
    <Stack>
      <HeroImage/>
      <Searchbar inputVal={inputVal} setInputVal={setInputVal}/>
      <GymList gymName={inputVal} geoLocation={geoLocation}/>
    </Stack>
  )
}
