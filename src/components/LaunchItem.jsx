import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";

const LaunchItem = (launch) => {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2x1">
          Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <HiCalendar />
        <Text fontSize="sm" ml={2}>
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
    </Box>
  );
};

export default LaunchItem;
