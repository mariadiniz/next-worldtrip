import { Container } from "@chakra-ui/react";
import ContinentBanner from "../components/Continent/banner";
import MainCities from "../components/Continent/cities";
import ContinentInfo from "../components/Continent/info";
import Navbar from "../components/navbar";

export default function ContinentPage() {
  return (
    <>
      <Navbar hasReturnButton />
      <ContinentBanner />
      <Container maxW={1160} p={0}>
        <ContinentInfo />
        <MainCities />
      </Container>
    </>
  );
}
