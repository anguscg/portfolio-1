import { Navbar, useModal, Modal, Text, Button } from "@nextui-org/react";
import Image from 'next/image'
import mypic from '../public/acgresume.jpg'


export default function NavbarGlobal() {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <Navbar shouldHideOnScroll css={{
        $$navbarBackgroundColor: "transparent", $$navbarBlurBackgroundColor: "transparent",
      }} variant="sticky">
        <Navbar.Brand>
          <Text b color="white" >
            ACG
          </Text>
        </Navbar.Brand>
        <Navbar.Content css={{ color: "white" }}  variant="underline">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link onPress={() => setVisible(true)}>Resume</Navbar.Link>
          <Navbar.Link href="/getintouch">Get in touch</Navbar.Link>
        </Navbar.Content>
      </Navbar>


      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image 
            width='{100%}'
            height='100%' 
            src={mypic} />
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button onPress={() => setVisible(false)}>Agree</Button>
        </Modal.Footer>
      </Modal>
    </div>
      
      
  )
}
