import React from "react";
import "../styles/navbar.css";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div id="navBar">
      <Menu isLazy>
        <MenuButton>
          {" "}
          <div id="menuTitle">Menu</div>
        </MenuButton>

        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Navbar;
