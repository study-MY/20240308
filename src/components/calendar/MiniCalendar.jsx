import { Card, CardBody, CardHeader, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../assets/css/MiniCalendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

const MiniCalendar = (props) => {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  return (
    <Card
      align="center"
      direction="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
      {/* <CardBody>
      </CardBody> */}
    </Card>
  );
};
export default MiniCalendar;
