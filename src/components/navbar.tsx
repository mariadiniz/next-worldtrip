import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface NavbarProps {
  hasReturnButton?: boolean;
}

export default function Navbar({ hasReturnButton }: NavbarProps) {
  const router = useRouter();

  return (
    <Flex m="1rem auto" background="white" maxW={1160} align="center">
      {hasReturnButton && <ChevronLeftIcon w={8} h={8} onClick={() => router.back()} />}
      <Image src="logo.svg" alt="logo" m="auto" />
    </Flex>
  );
}
