import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = (props) => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {props.language}
        </Text>
        <Text h4 color="white">
          {props.title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={props.image}
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);


export default Card1;
