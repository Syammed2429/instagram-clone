//Importing all the required packages
import React, { FC } from "react";
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
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
      <Container>
        <Flex>
          {/* Logo */}
          <Image src={logo} alt="logo" />

          {/* Search bar start */}
          <FormControl>
            <FormLabel htmlFor="search">
              <Box position="absolute" top="3">
                <BiSearch />
              </Box>
              <Input type="text" placeholder="Search" />
            </FormLabel>
          </FormControl>
          {/* Search bar End */}

          {/* LeftSide Icons Start */}

          {/* LeftSide Icons End */}
        </Flex>
      </Container>
    </>
  );
};

export { Navbar };
