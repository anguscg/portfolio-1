import {React, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";


export default function ThankYouModal() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
     
    </div>
  );
}
