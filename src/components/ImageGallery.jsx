import { Box } from "@chakra-ui/react";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TabMenu from "./TabMenu";
import { Image } from "antd";
const images = [
  "https://images.pexels.com/photos/15011063/pexels-photo-15011063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/12002706/pexels-photo-12002706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/16143861/pexels-photo-16143861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/16145648/pexels-photo-16145648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/10401968/pexels-photo-10401968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/5197130/pexels-photo-5197130.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/12765592/pexels-photo-12765592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

  "https://images.pexels.com/photos/15883885/pexels-photo-15883885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
];
export default function ImageGallery() {
  return (
    <Box px={3}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 1200: 4, 800: 3, 500: 2, 200: 1 }}
      >
        <Masonry columnsCount={4} gutter="15px">
          {images.map((image, i) => (
            <Image  src={image} preview={{}} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
}
