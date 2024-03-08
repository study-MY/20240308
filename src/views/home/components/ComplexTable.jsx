import {
  Card,
  CardBody,
  CardHeader,
  Progress,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const ComplexTable = () => {
  // const statusIconArr = [
  //   { icon: "v", statusData: "Approved" },
  //   { icon: "x", statusData: "Disabled" },
  //   { icon: "!", statusData: "Error" },
  // ];
  const ComplexTableArr = [
    {
      name: "Marketplace",
      status: "Approved",
      date: "24.Jan.2021",
      progress: "50",
    },
  ];

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        <Table>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>STATUS</Th>
              <Th>DATE</Th>
              <Th>PROGRESS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ComplexTableArr.map((arr, index) => (
              <Tr key={index}>
                <Td>{arr.name}</Td>
                <Td>
                  {arr.status === "Approved" && <FaCheckCircle />}
                  {arr.status}
                </Td>
                <Td>{arr.date}</Td>
                <Td>
                  <Progress value={arr.progress} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
export default ComplexTable;
