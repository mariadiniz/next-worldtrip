import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Box
      w="100%"
      h={[300, 500]}
      bgImage="https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      display="flex"
      justifyContent="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      objectFit="cover"
    >
      <Flex maxW={1160} w="100%" justify="space-between" align="flex-end">
        <Box maxW="50%" pb={["2rem", "4rem"]} pl={["1rem", 0]}>
          <Text color="white" fontWeight="700" fontSize="4xl">
            Europa
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}