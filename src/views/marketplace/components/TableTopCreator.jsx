import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Flex,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableTopCreator = () => {
  return (
    <Card>
      <CardHeader>
        <Flex flexDir={"row"} justify={"space-between"} alignItems={"center"}>
          TopCreator
          {/* <Spacer></Spacer> */}
          <Button borderRadius={"20px"}>See all</Button>
        </Flex>
      </CardHeader>
      <Table>
        <Thead>
          <Tr textTransform={"uppercase"}>
            <Th>name</Th>
            <Th>artworks</Th>
            <Th>rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Avatar></Avatar>
              <Text>@userID</Text>
            </Td>
            <Td>9821</Td>
            <Td>Progress Bar</Td>
          </Tr>
        </Tbody>
      </Table>
    </Card>
  );
};

export default TableTopCreator;
