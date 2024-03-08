import { Button, Card, Flex, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Card
      padding={"40px"}
      width={"100%"}
      height={"350px"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1573483215769-4d4acea52a1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }
      backgroundSize={"cover"}
      color={"#fff"}
    >
      <Text
        as={"h4"}
        width={"60%"}
        fontSize={"42px"}
        fontWeight={700}
        lineHeight={1.1}
      >
        Discover, collect, and sell extraordinary NFTs
      </Text>
      <Text width={"60%"} fontSize={"18px"}>
        Enter in this creative world. Discover now the latest NFTs or start
        creating your own!
      </Text>
      <Flex gap={"20px"} marginTop={"auto"}>
        <Button variant={"ghost"} color={"#fff"}>
          Discover
        </Button>
        <Button variant={"ghost"} color={"#fff"}>
          Watch Video
        </Button>
      </Flex>
    </Card>
  );
};

export default Banner;
