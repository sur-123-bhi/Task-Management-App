import React from "react";
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
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();

  const handleSubmitLoginForm = async () => {
    try {
      const response = await axios.post("http://localhost:8004/users/login", {
        email: email,
        password: password,
      });
      // Handle successful response
      
      if (response.data.token !== undefined) {
        localStorage.setItem('user', JSON.stringify(response.data));
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login unsuccessful",
          description: "Login with correct credentials",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      boxSizing={"border-box"}
      bg="Beige"
      pt="5%"
      pos="absolute"
      top="0"
    >
      <FormControl w="100%" h="100%" isRequired>
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
            LOGIN
          </Heading>
          <FormLabel fontSize="20px" color="Beige">
            Email
          </FormLabel>
          <Input
            placeholder="Enter Your Email"
            p="3%"
            fontSize="15px"
            type="email"
            mt="1%"
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
            type="password"
            mt="1%"
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
            onClick={handleSubmitLoginForm}
          >
            LOGIN
          </Button>

          <Flex w="100%" justify="space-evenly" mt="10%" align="center">
            <Text fontSize="22px" color="Beige">
              Don't have an account?
            </Text>
            <Button
              px="4%"
              py="3%"
              color="DarkSlateGrey"
              borderRadius="10px"
              bg="Beige"
              cursor="pointer"
              fontSize="20px"
              fontWeight="600"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </FormControl>
    </Flex>
  );
};
