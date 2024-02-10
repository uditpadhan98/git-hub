import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import Repos from "../components/Repos";
import Graph from "./Graph";

const Profile = () => {
  const location = useLocation();
  const username = location.state;
  const toast = useToast();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!username) return;
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        console.log(data);
        setUserData(data);
        if (data.message) {
          return toast({
            title: "Error",
            description:
              data.message === "Not Found" ? "User Not Found" : data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    fetchData();
  }, [username, toast]);

  return (
    <div className="bg-black">
      <Container maxW="container.lg" className="bg-black text-white p-4">
        {userData ? (
          <>
            <Flex
              my={16}
              border={"2px solid"}
              borderColor={"green.500"}
              borderRadius={4}
              padding={8}
            >
              <VStack gap={5}>
                <Avatar
                  size={"2xl"}
                  name={userData.name}
                  src={userData.avatar_url}
                />
                <Button colorScheme="whatsapp">
                  <a href={userData.html_url} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </Button>
              </VStack>

              <VStack ml={8} alignItems={"self-start"}>
                <Flex gap={4}>
                  <Badge fontSize={"0.9em"} colorScheme="blue">
                    Public Repos: {userData.public_repos}
                  </Badge>
                  <Badge fontSize={"0.9em"} colorScheme="blue">
                    Public Gists: {userData.public_gists}
                  </Badge>
                  <Badge fontSize={"0.9em"} colorScheme="blue">
                    Followers: {userData.followers}
                  </Badge>
                  <Badge fontSize={"0.9em"} colorScheme="blue">
                    Following: {userData.following}
                  </Badge>
                </Flex>

                <Text
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  mt={4}
                  color={"green.400"}
                >
                  {userData.name}
                </Text>
                <Text fontSize={"md"} fontWeight={"bold"} color={"blue.500"}>
                  {userData.bio}
                </Text>

                <Box>
                  <Text fontSize={"md"}>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      color={"red.200"}
                      mr={1}
                    >
                      Company:
                    </Text>
                    {userData.company || "Not Specified"}
                  </Text>
                  <Text fontSize={"md"}>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      color={"red.200"}
                      mr={1}
                    >
                      Location:
                    </Text>
                    {userData.location || "Not Specified"}
                  </Text>

                  <Text fontSize={"md"}>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      color={"red.200"}
                      mr={1}
                    >
                      Blog / Website:
                    </Text>
                    {userData.blog ? (
                      <a
                        href={userData.blog}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500"
                      >
                        {userData.blog}
                      </a>
                    ) : (
                      "Not Specified"
                    )}
                  </Text>

                  <Text fontSize={"md"}>
                    <Text
                      as={"span"}
                      fontWeight={"bold"}
                      color={"red.200"}
                      mr={1}
                    >
                      Member Since:
                    </Text>
                    {new Date(userData.created_at).toLocaleDateString()}
                  </Text>
                </Box>
              </VStack>
            </Flex>
            <Repos reposUrl={userData.repos_url} />
            <Graph username={userData.login} />
          </>
        ) : (
          <div>
			<h6>Loading</h6>
		  </div>
        )}
      </Container>
    </div>
  );
};

export default Profile;
