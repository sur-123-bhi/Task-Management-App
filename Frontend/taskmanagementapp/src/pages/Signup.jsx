import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signup = () => {

  const toast = useToast();
  const navigate = useNavigate();
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitSignupForm = () => {
    
    axios
      .post('http://localhost:8004/users/register/', JSON.stringify({
        fullName: fullName,
        email: email,
        password: password
      }))
      .then((res) => {
        toast({
          title: 'Sign Up Successfull',
          description: "You can Login now",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      boxSizing={"border-box"}
      bg="Beige"
      pt="1%"
      pos="absolute"
      top="0"
    >
      <FormControl
        w="100%"
        h="100%"
        isRequired
      >
        <Flex
          flexDir="column"
          w="40%"
          bg="DarkSlateGrey"
          boxSizing={"border-box"}
          m="auto"
          p="5%"
          borderRadius="10px"
        >
          <Heading as="h1" color="Beige" m="auto" mb="5%">
            SIGN UP
          </Heading>

          <FormLabel fontSize="20px" color="Beige">
            Full Name
          </FormLabel>
          <Input
            placeholder="Enter Your Name"
            p="3%"
            fontSize="15px"
            type="text"
            id="name"
            mb="5%"
            bg="Beige"
            outline="none"
            borderRadius="10px"
            onChange={(e) => setName(e.target.value)}
          />

          <FormLabel fontSize="20px" color="Beige">
            Email
          </FormLabel>
          <Input
            placeholder="Enter Your Email"
            p="3%"
            fontSize="15px"
            type="email"
            id="email"
            bg="Beige"
            outline="none"
            borderRadius="10px"
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormLabel fontSize="20px" color="Beige" mt="5%">
            Password
          </FormLabel>
          <Input
            placeholder="Enter Your Password"
            p="3%"
            fontSize="15px"
            bg="Beige"
            mb="6%"
            mt="1%"
            id="password"
            type="password"
            outline="none"
            borderRadius="10px"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            p="3%"
            color="DarkSlateGrey"
            borderRadius="10px"
            bg="Beige"
            w="50%"
            cursor="pointer"
            m="auto"
            fontSize="20px"
            fontWeight="600"
            onClick={handleSubmitSignupForm}
          >
            SIGN UP
          </Button>

          <Flex w="100%" justify="space-evenly" mt="10%" align="center">
            <Text fontSize="22px" color="Beige">
              Already have an account?
            </Text>
            <Button
              px="5%"
              py="3%"
              color="DarkSlateGrey"
              borderRadius="10px"
              bg="Beige"
              cursor="pointer"
              fontSize="20px"
              fontWeight="600"
              onClick={() => navigate("/")}
            >
              LOGIN
            </Button>
          </Flex>
        </Flex>
      </FormControl>
    </Flex>
  );
};
