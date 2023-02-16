import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Next.js & node.js
        </Text>
        <Text h4 color="white">
          Chat App
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&w=600"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);


export default Card1;
