import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import HomeBanner from "../components/Home/banner";
import ContinentPicker from "../components/Home/continentPicker";
import TravellingTypes from "../components/Home/travellingTypes";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <TravellingTypes />
      <Divider border={[1, 2]} borderColor="gray.700" w={90} m="auto" />
      <ContinentPicker />
    </>
  );
};

export default Home;
