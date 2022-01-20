//Importing all the required packages
import { Container, Flex, Image } from "@chakra-ui/react";
import React, { FC } from "react";

import logo from "../../assets/images/Logo.svg";

const Navbar: FC = () => {
  return (
    <>
      <Container>
        <Flex>
          <Image src={logo} alt="logo" />
        </Flex>
      </Container>
    </>
  );
};

export { Navbar };
