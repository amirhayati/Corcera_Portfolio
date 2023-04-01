import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      backgroundColor="white"
      borderRadius="10px"
      spacing="24px"
    >
      <Image
        borderRadius='10px'
        objectFit={"cover"}
        width="100%"
        src={imageSrc}
        alt={title}
      />
      <VStack p={5} alignItems={"flex-start"}>
        <Heading fontSize={"xl"} as="b" color="black">{title}</Heading>
        <Text color="gray" fontSize={"sm"} as={""}>{description}</Text>
        <HStack>
          <Text color="black">see more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color={"black"}/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
