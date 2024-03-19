import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, Button, Text } from "@chakra-ui/react";

const Task = ({ taskk }) => {
  return (
    <Flex
      bg="DarkSlateGrey"
      align="center"
      p="2%"
      px="4%"
      borderRadius="10px"
      gap="4%"
    >
      <Button
        py="1%"
        color="DarkSlateGrey"
        borderRadius="7px"
        bg="Beige"
        cursor="pointer"
        fontSize="18px"
      >
        <CheckIcon />
      </Button>
      <Text
        color="beige"
        fontSize="20px"
        inlineSize="200px"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap;"
      >
        {taskk}
      </Text>

      <Button
        px="3%"
        py="1%"
        color="DarkSlateGrey"
        borderRadius="7px"
        bg="Beige"
        cursor="pointer"
        fontSize="18px"
      >
        See Task
      </Button>

      <Flex justify="flex-end" w="50%" gap="8%">
        <Button
          py="3%"
          px="3%"
          color="DarkSlateGrey"
          borderRadius="7px"
          bg="Beige"
          cursor="pointer"
          fontSize="18px"
        >
          <EditIcon />
        </Button>
        <Button
          py="3%"
          px="3%"
          color="DarkSlateGrey"
          borderRadius="7px"
          bg="Beige"
          cursor="pointer"
          fontSize="18px"
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Task;
