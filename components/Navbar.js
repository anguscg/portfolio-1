import { Navbar, Text } from "@nextui-org/react";

export default function NavbarGlobal() {
  

  return (

      <Navbar shouldHideOnScroll css={{$$navbarBackgroundColor: "transparent",$$navbarBlurBackgroundColor: "transparent", 
      }}  variant="sticky">
        <Navbar.Brand>
          <Text b color="white" hideIn="xs">
            ACG
          </Text>
        </Navbar.Brand>
        <Navbar.Content css={{color: "white"}}hideIn="xs" variant="underline">
          <Navbar.Link  href="/">Home</Navbar.Link>
          <Navbar.Link  href="#">Resume</Navbar.Link>
          <Navbar.Link href="/getintouch">Get in touch</Navbar.Link>
        </Navbar.Content>
      </Navbar>
  )
}
