import React, { useState } from "react";
import { Box, Stack, Link, Icon, Collapse, useDisclosure } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MenuItems = () => {
  return (
    <Stack spacing={4} align="start" color="brand.600">
      <Link href="/" _hover={{ color: "brand.700" }}>
        Home
      </Link>
      <Link href="/projects" _hover={{ color: "brand.700" }}>
        Projects
      </Link>
      <Link href="/about" _hover={{ color: "brand.700" }}>
        About
      </Link>
      <Link href="/contact" _hover={{ color: "brand.700" }}>
        Contact
      </Link>
    </Stack>
  );
};

const NavMenu = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Box as="button" display="flex" alignItems="center" onClick={onToggle} color="brand.600" _hover={{ color: "brand.700" }}>
        Menu
        <Icon as={isOpen ? FaChevronUp : FaChevronDown} ml={1} />
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4}>
          <MenuItems />
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavMenu;
