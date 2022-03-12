import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ContinentPicker() {
  return (
    <Box maxW={1240} m="auto">
      <Box m="52px auto" fontSize={["xl", "4xl"]} fontWeight="500" textAlign="center">
        <Text>
          Vamos nessa?
        </Text>
        <Text>
          Então escolha seu continente
        </Text>
      </Box>
      <Box mb="8">
        <Swiper
          style={{
            "--swiper-navigation-color": "#FFBA08",
            "--swiper-pagination-color": "#FFBA08",
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Link href="/europe" passHref>
              <Flex
                align="center"
                justify="center"
                direction="column"
                h={[300, 450]}
                w="100%"
                bgPosition="center"
                bgImage="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              >
                <Text fontSize={["3xl", "5xl"]} fontWeight="700" color="white">
                  Europa
                </Text>
                <Text fontSize={["lg", "2xl"]} fontWeight="700" color="white">
                  O continente mais antigo
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
