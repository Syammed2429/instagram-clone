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
        </Flex>
      </Container>
    </>
  );
};

export { Navbar };
