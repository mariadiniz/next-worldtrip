import {
  Box,
  HStack,
  Text,
  Image,
  Flex,
  useBreakpointValue,
  List,
  UnorderedList,
  ListItem,
  ListIcon,
  flexbox,
} from "@chakra-ui/react";
import {
  Ri24HoursFill,
  RiAccountBoxLine,
  RiAccountPinBoxLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export default function TravellingTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return (
      <Box maxW={1160} m="114px auto 80px">
        <HStack justify="space-between">
          <Flex direction="column" align="center" minW={105}>
            <Image src="/cocktail.svg" alt="cocktail" />
            <Text fontWeight="600" mt="6">
              vida noturna
            </Text>
          </Flex>
          <Flex direction="column" align="center" minW={105}>
            <Image src="/surf.svg" alt="surf" />
            <Text fontWeight="600" mt="6">
              praia
            </Text>
          </Flex>
          <Flex direction="column" align="center" minW={105}>
            <Image src="/building.svg" alt="building" />
            <Text fontWeight="600" mt="6">
              moderno
            </Text>
          </Flex>
          <Flex direction="column" align="center" minW={105}>
            <Image src="/museum.svg" alt="museum" />
            <Text fontWeight="600" mt="6">
              clássico
            </Text>
          </Flex>
          <Flex direction="column" align="center" minW={105}>
            <Image src="/earth.svg" alt="earth" />
            <Text fontWeight="600" mt="6">
              e mais...
            </Text>
          </Flex>
        </HStack>
      </Box>
    );
  } else {
    return (
      <List display="flex" flexWrap="wrap" justifyContent="space-around" m="2rem auto" maxW="80%" gap="6">
        <ListItem>
          <ListIcon
            as={RiCheckboxBlankCircleFill}
            color="yellow.500"
            fontSize="xs"
            margin="5px"
          />
          vida noturna
        </ListItem>
        <ListItem>
          <ListIcon
            as={RiCheckboxBlankCircleFill}
            color="yellow.500"
            fontSize="xs"
            margin="5px"
          />
          praia
        </ListItem>
        <ListItem>
          <ListIcon
            as={RiCheckboxBlankCircleFill}
            color="yellow.500"
            fontSize="xs"
            margin="5px"
          />
          moderno
        </ListItem>
        <ListItem>
          <ListIcon
            as={RiCheckboxBlankCircleFill}
            color="yellow.500"
            fontSize="xs"
            margin="5px"
          />
          clássico
        </ListItem>
        <ListItem>
          <ListIcon
            as={RiCheckboxBlankCircleFill}
            color="yellow.500"
            fontSize="xs"
            margin="5px"
          />
          e mais...
        </ListItem>
      </List>
    );
  }
}
