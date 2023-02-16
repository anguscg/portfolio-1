import { Card, Col, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Next.js
        </Text>
        <Text h4 color="white">
          Calculator App
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=600"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Calculator"
    />
  </Card>
);
export default Card3;