import {
  Flex,
  Input,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";
import Task from "../components/TaskCompo.jsx";
import PaginationBtns from '../components/PaginationBtns.jsx';
import React, { useState } from "react";

const Dashboard = () => {
  const [duedate, setDueDate] = useState("");
  const [taskk, setTask] = useState("");

  return (
    <Flex
      flexDir="column"
      w="100%"
      h="100vh"
      bg="beige"
      px="5%"
      pb='4%'
      boxSizing="border-box"
      pos="absolute"
      top="0"
      left="0"
    >
      <Heading color="DarkSlateGrey" as="h2" mb="1%">
        Dashboard / User
      </Heading>
      <Flex w="100%" margin="auto" justify="space-between" borderRadius="10px">
        <Input
          color="DarkSlateGrey"
          placeholder="Enter Task Here"
          _placeholder={{ color: "teal", fontSize: "18px" }}
          w="55%"
          bg="beige"
          p="1.5%"
          borderRadius="10px"
          fontSize="20px"
          outline="none"
          border="1px solid DarkSlateGrey"
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={duedate}
          style={{
            padding: "1.5%",
            borderRadius: "5px",
            border: "1px solid DarkSlateGrey",
            color: "DarkSlateGrey",
            outline: "none",
            width: "200px",
            fontSize: '18px',
            backgroundColor: "beige",
          }}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button
          px="6%"
          color="Beige"
          borderRadius="10px"
          bg="DarkSlateGrey"
          cursor="pointer"
          fontSize="18px"
          fontWeight="600"
          type="submit"
        >
          Add Todo
        </Button>
      </Flex>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(3, 1fr)"
        rowGap='10%'
        columnGap='2%'
        pb='4%'
        h='fit-content'
      >
       <Task taskk={taskk}/>
       <Task taskk={taskk}/>
       <Task taskk={taskk}/>
       <Task taskk={taskk}/>
       <Task taskk={taskk}/>
       <Task taskk={taskk}/>
    </Grid>

    <Flex mt='4%'>
        <PaginationBtns/>
    </Flex>
    </Flex>
  );
};

export default Dashboard;
