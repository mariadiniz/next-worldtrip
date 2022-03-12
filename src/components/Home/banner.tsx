import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      h={[163, 335]}
      bgImage="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80"
      bgPosition="0% 28%"
      display="flex"
      justifyContent="center"
    >
      <Flex maxW={1160} w="100%" justify="space-between" align="center">
        <Box maxW={["85%", "50%"]} p={["1rem", 0]}>
          <Text color="white" fontWeight="500" fontSize={["xl", "4xl"]}>
            5 continentes, infinitas possibilidades.
          </Text>
          <Text color="white" fontSize={["sm", "xl"]} mt="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && (
          <Image
            src="airplane.svg"
            alt="airplane"
            w={400}
            pos="relative"
            bottom={-16}
            transform="rotate(3deg)"
          />
        )}
      </Flex>
    </Box>
  );
}
