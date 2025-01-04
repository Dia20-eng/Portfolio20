import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, NavLink } from "@mantine/core";
import { IconHexagonLetterD, IconX } from "@tabler/icons-react";
import { Burger } from '@mantine/core';
import { navlinks } from "./Header";

const Sidebar = () => {
  const [opened,  { toggle } ] = useDisclosure(false);

  return (
    <>
     
     
      <Drawer.Root  className="md:hidden !-z-10" position="right" opened={opened} onClose={toggle}  size={"xs"}>
        <Drawer.Overlay  className ="!-z-0" style={{ backgroundOpacity: 0.5, blur: 4 }}  />
        <Drawer.Content className="!-z-0" bg="#0A192F">
          <Drawer.Body className="mt-20 flex flex-col gap-5" bg="#0A192F"  >{navlinks(true)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      
      <Burger className="md:!hidden !z-10"color="#64FFDA" size={35} opened={opened} onClick={toggle} />
    </>
  );
};

export default Sidebar;
