import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card5 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Business
        </Text>
        <Text h3 color="white">
         Revolutionising the fashion space and disrupting the status quo
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://static.wixstatic.com/media/5b31d4_969ae50414814a41b5f5673fb16f94db~mv2.png"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Girls Trade Logo"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="data:image/jpeg;base64,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"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Girls Trade Pty Ltd
              </Text>
              <Text color="#d1d1d1" size={12}>
                BUY | SELL | RENT
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <a href="www.girlstrade.com.au" target="_blank">
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  View Website
              </Text>
              </Button>
            </Row>
          </a>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default Card5;