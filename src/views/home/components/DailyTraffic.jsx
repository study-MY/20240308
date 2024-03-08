import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import ColumnChart from "../../../components/charts/BarChart";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";

const DailyTraffic = () => {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Stat>
              <StatLabel>Daily Traffic</StatLabel>
              <Flex flexDir={"row"} alignItems={"end"}>
                <StatNumber>2.579</StatNumber>
                <StatHelpText>Visitors</StatHelpText>
              </Flex>
            </Stat>
          </Flex>
          <Flex align={"center"}>
            <Icon as={RiArrowUpSFill}></Icon>
            <Text>arrow</Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <ColumnChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </CardBody>
    </Card>
  );
};
export default DailyTraffic;
