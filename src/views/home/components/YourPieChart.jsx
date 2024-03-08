import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import { VSeparator } from "../../../components/separator/Separator";
import PieChart from "../../../components/charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../variables/charts";

const YourPieChart = () => {
  return (
    <Card>
      <CardHeader>
        <Flex>
          <Text as={"h2"}>Your Pie Chart</Text>
          <Select variant={"filled"}>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </Select>
        </Flex>
      </CardHeader>
      <CardBody>
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Flex>
              <Box bg="#00ff00" borderRadius={"50%"}></Box>
              <Text>Your Files</Text>
            </Flex>
            <Text as={"b"}>63%</Text>
          </Flex>
          <VSeparator />
          <Flex>
            <Flex>
              <Box bg="#0000ff" borderRadius={"50%"}></Box>
              <Text>System</Text>
            </Flex>
            <Text as={"b"}>25%</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default YourPieChart;
