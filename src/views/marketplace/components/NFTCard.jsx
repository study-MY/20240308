import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const NFTCard = () => {
  // 배열을 받아서 맵으로 돌리고자 한다면?
  return (
    <Card padding={"12px"}>
      <Image
        src="https://images.unsplash.com/photo-1488895892452-8df3dbc55c68?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={"100%"}
        height={"40%"}
      />
      <Box
        position={"absolute"}
        top={"20px"}
        right={"20px"}
        width={"40px"}
        height={"40px"}
        backgroundColor={"#fff"}
        borderRadius={"50%"}
      >
        <IoIosHeartEmpty />
        <IoMdHeart />
        {/* 여기 아이콘은 버튼으로 바꿔서 동작요소 넣어야 함. */}
      </Box>

      <Stack direction={"row"}>
        <Text>Abstract Colors</Text>
        <AvatarGroup size={"sm"} max={2}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </Stack>
      <Text>By Esthera Jackson</Text>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text>Current Bid: 0.91 ETH</Text>
        <Button>Place Bid</Button>
      </Stack>
    </Card>
  );
};
export default NFTCard;
