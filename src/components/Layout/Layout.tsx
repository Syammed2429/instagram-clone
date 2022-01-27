import React, { FC } from "react";
import { Feed } from "../Feed/Feed";

import { Navbar } from "../Navbar/Navbar";
import { Stories } from "../Stories/Stories";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Stories />
      <Feed />
    </>
  );
};

export { Layout };
