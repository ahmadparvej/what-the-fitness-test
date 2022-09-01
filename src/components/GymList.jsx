import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  Select,
  Text,
  InputRightElement,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Gym } from "./Gym";

export const GymList = ({ gymName, geoLocation }) => {
  const [locationName, setLocationName] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [gymData, setGymData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [locations, setLocations] = useState([]);

  // Fetch request for Nearest Gym
  useEffect(() => {
    axios
      .get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=${geoLocation.lat}&long=${geoLocation.long}`
      )
      .then((res) => setGymData(res.data.data));
  }, []);

  // Fetch request for available cities
  useEffect(() => {
    axios
      .get(`https://devapi.wtfup.me/gym/places`)
      .then((res) => setCityData(res.data.data));
  }, []);

  // Filter By city
  const handleCityName = (city) => {
    let loc = cityData.filter((el) => el.city === city);
    setLocations([...loc[0].addressComponent]);
  };

  // Reset All Filters
  const handleReset = () => {
    setLocationName("");
    setMin("");
    setMax("");
    setCityData([]);
    setLocations([]);
  };

  let newData = gymData.filter(
    (elem) =>
      elem.city.toLowerCase().includes(locationName.toLowerCase()) || elem.address1.toLowerCase().includes(locationName.toLowerCase())
  );

  return (
    <>
      <Flex direction={["column", "column", "row", "row"]} px="2rem" gap="2rem">
        <Box w={["100%", "100%", "30%", "30%"]}>
          <Flex justify="space-between">
            <Heading as="h3" size="xl" fontWeight="400" my="1rem">
              Filters
            </Heading>
            {(locationName || min || max) && (
              <Button m="auto 0" bg="#920909" onClick={handleReset}>
                reset
              </Button>
            )}
          </Flex>
          <Flex
            direction={["row", "row", "column", "column"]}
            color="white"
            gap="1rem"
          >
            <Flex direction="column" gap="1rem">
              <Box display="flex" flexDirection="column" gap="0.5rem">
                <Heading as="h3" size="sm">
                  Location
                </Heading>
                <InputGroup
                  size="md"
                  border="2px solid white"
                  bg="#2e2e2e"
                  p="10px"
                  borderRadius="10px"
                  display="flex"
                  alignContent="center"
                >
                  <Icon as={BiSearch} color="white" w={6} h={6} m="auto" />
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter Location"
                    border="none"
                    variant="unstyled"
                    onChange={(e) => setLocationName(e.target.value)}
                  />
                </InputGroup>
              </Box>
              <Box display="flex" flexDirection="column" gap="0.5rem">
                <Heading as="h3" size="sm">
                  Price
                </Heading>
                <InputGroup
                  size="md"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  gap="1rem"
                >
                  <Input
                    border="2px solid grey"
                    p="10px"
                    type="text"
                    placeholder="Min"
                    value={min}
                    variant="unstyled"
                    bg="#2e2e2e"
                    onChange={(e) => setMin(e.target.value)}
                  />
                  <Input
                    p="10px"
                    type="text"
                    placeholder="Max"
                    value={max}
                    border="2px solid grey"
                    variant="unstyled"
                    bg="#2e2e2e"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </InputGroup>
              </Box>
            </Flex>
            <Box display="flex" flexDirection="column" gap="0.5rem">
              <Heading as="h3" size="sm">
                Cities
              </Heading>
              <Select
                placeholder="Select Cities"
                bg="#2e2e2e"
                color="white"
                w="100%"
                onChange={(e) => handleCityName(e.target.value)}
              >
                {cityData.map((el, index) => {
                  return (
                    <option
                      key={index}
                      style={{ color: "white", background: "#2e2e2e" }}
                      value={el.city}
                    >
                      {el.city}
                    </option>
                  );
                })}
              </Select>
              {locations.length > 0 && (
                <Box border="2px solid white" borderRadius="10px">
                  {locations?.length > 0 &&
                    locations.map((el) => {
                      return (
                        <Text
                          _hover={{ background: "grey" }}
                          p="5px"
                          cursor="pointer"
                          onClick={() => setLocationName(el.address1)}
                        >
                          {el.address1}
                        </Text>
                      );
                    })}
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
        <Box w={["100%", "100%", "70%", "70%"]}>
          <Flex direction="column" gap="1rem">
            {newData?.length > 0 &&
              newData
                .filter((elem) =>
                  elem.slug.toLowerCase().includes(gymName.toLowerCase())
                )
                .map((elem) => {
                  return <Gym data={elem} key={elem.user_id} />;
                })}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
