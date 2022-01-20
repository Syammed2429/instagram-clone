//Importing all the required packages
import React, { FC } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

//Importing local files
import logo from "../../assets/images/Logo.svg";
import home from "../../assets/images/home.svg";
import messenger from "../../assets/images/messenger.svg";
import add from "../../assets/images/add.svg";
import safari from "../../assets/images/safari.svg";
import like from "../../assets/images/like.svg";
import userPic from "../../assets/images/user-pic.svg";

const Navbar: FC = () => {
  return (
    <>
      <SimpleGrid boxShadow="base" p="3" bg="white">
        <Center>
          <Flex>
            {/* Logo */}
            <Image src={logo} alt="logo" />

            {/* Search bar start */}
            <Box ml="12rem" mr={20} w={80}>
              <FormControl>
                <FormLabel htmlFor="search">
                  <Box position="absolute" top="3" left="30%">
                    <BiSearch fontSize={20} />
                  </Box>
                  <Input
                    _placeholder={{ textAlign: "center", fontSize: "18px" }}
                    type="text"
                    placeholder="Search"
                  />
                </FormLabel>
              </FormControl>
            </Box>
            {/* Search bar End */}

            {/* LeftSide Icons Start */}
            <HStack gap={6} mb={4}>
              <Image src={home} />
              <Image src={messenger} />
              <Image src={add} />
              <Image src={safari} />
              <Image src={like} />
              <Image src={userPic} />
            </HStack>

            {/* LeftSide Icons End */}
          </Flex>
        </Center>
      </SimpleGrid>
    </>
  );
};

export { Navbar };
