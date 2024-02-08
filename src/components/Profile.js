import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { Avatar, Badge, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  const location = useLocation();
  const userData=location.state;
  console.log(userData);
  // const toast=useToast();
  // const [userData,setUserData]=useState(null);
  
  // useEffect(()=>{
  //   async function fetchData(){
  //     if(!username) return;
  //       try {
  //         const res=await fetch(`https://api.github.com/users/${username}`);
  //         const data=await res.json();
  //          // setIsLoading(false);
  //          console.log(data);
  //          if(data.message){
  //            return  toast({
  //              title:"Error",
  //              description:data.message==="Not Found" ? "User Not Found" : data.message,
  //              status:"error",
  //              duration:3000,
  //              isClosable:true,
  //             });
  //           }
  //           setUserData(data);
  //           // console.log("data",userData);
  //       } catch (error) {
  //           toast({
  //               title:"Error",
  //               description:error.message,
  //               status:"error",
  //               duration:3000,
  //               isClosable:true,
  //           });
  //         }
  //       }
  //       fetchData();  
  // },[username,toast]);

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* {userData.name} */}
      {/* <Flex my={16} border={"2px solid"} borderColor={"green.500"} borderRadius={4} padding={8}>
				<VStack gap={5}>
					<Avatar size={"2xl"} name={userData.name} src={userData.avatar_url} />
					<Button colorScheme='whatsapp'>
						<a href={userData.html_url} target='_blank' rel="noreferrer">
							View Profile
						</a>
					</Button>
				</VStack>

				<VStack ml={8} alignItems={"self-start"}>
					<Flex gap={4}>
						<Badge fontSize={"0.9em"} colorScheme='orange'>
							Public Repos: {userData.public_repos}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='pink'>
							Public Gists: {userData.public_gists}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='cyan'>
							Followers: {userData.followers}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='purple'>
							Following: {userData.following}
						</Badge>
					</Flex>

					<Text fontSize={"2xl"} fontWeight={"bold"} mt={4} color={"green.400"}>
						{userData.name}
					</Text>
					<Text fontSize={"md"} fontWeight={"bold"} color={"green.500"}>
						{userData.bio}
					</Text>

					<Box>
						<Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Company:
							</Text>
							{userData.company || "Not Specified"}
						</Text>
						<Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Location:
							</Text>
							{userData.location || "Not Specified"}
						</Text>

						<Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Blog / Website:
							</Text>
							{userData.blog ? (
								<a href={userData.blog} target='_blank' rel="noreferrer">
									{userData.blog}
								</a>
							) : (
								"Not Specified"
							)}
						</Text>

						<Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Member Since:
							</Text>
							{new Date(userData.created_at).toLocaleDateString()}
						</Text>
					</Box>
				</VStack>
			</Flex> */}
    </div>
  )
}

export default Profile