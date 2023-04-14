
import { Box } from "@chakra-ui/react"
import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import TabMenu from "./TabMenu"
const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",

  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
]
export default function ImageGallery() {
  return (
    <Box px={3}><ResponsiveMasonry
      columnsCountBreakPoints={{ 1200: 4, 800: 3, 500: 2,200: 1 }}
    >
      <Masonry columnsCount={4} gutter="15px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
    </Box>

  )
}