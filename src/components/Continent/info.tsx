import { Box, Flex, Text } from "@chakra-ui/react";

export default function ContinentInfo() {
  return (
    <Flex m={["2rem auto", "80px auto"]} align="center" wrap={["wrap", "nowrap"]}>
      <Text flexBasis={["100%"]} textAlign="justify" p={["0 1rem", 0]}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <Flex m={["1rem", "0 0 0 70px"]} justify="space-between" w="100%" textAlign="center" fontWeight="600">
        <Box>
          <Text fontSize="4xl" color="yellow.500">
            50
          </Text>
          <Text>
            países
          </Text>
        </Box>
        <Box>
          <Text fontSize="4xl" color="yellow.500">
            60
          </Text>
          <Text>
            línguas
          </Text>
        </Box>
        <Box>
          <Text fontSize="4xl" color="yellow.500">
            70
          </Text>
          <Text>
            cidades +100
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
