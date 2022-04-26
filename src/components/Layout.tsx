import React from "react";
import "twin.macro";

import Main from "./Main";

const Layout: React.FC = ({ children }) => {
  return (
    <div tw="overflow-hidden">
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
