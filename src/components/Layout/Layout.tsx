import React, { FC } from "react";

import { Navbar } from "../Navbar/Navbar";
import { Stories } from "../Stories/Stories";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Stories />
    </>
  );
};

export { Layout };
