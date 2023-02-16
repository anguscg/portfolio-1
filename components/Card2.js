import { Card, Col, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card css={{ w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          React.js
        </Text>
        <Text h4 color="white">
          Expense Tracker
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/7567228/pexels-photo-7567228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
export default Card2;