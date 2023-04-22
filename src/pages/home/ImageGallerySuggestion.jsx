import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Image } from 'antd';
import ImageModal from './ImageModal';
import { useNavigate } from 'react-router-dom';
const images = [
  'https://images.pexels.com/photos/15011063/pexels-photo-15011063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/12002706/pexels-photo-12002706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/16143861/pexels-photo-16143861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/16145648/pexels-photo-16145648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/10401968/pexels-photo-10401968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/5197130/pexels-photo-5197130.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/12765592/pexels-photo-12765592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

  'https://images.pexels.com/photos/15883885/pexels-photo-15883885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=206',
  'https://images.pexels.com/photos/16300645/pexels-photo-16300645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg',
];
export default function ImageGallerySuggestion() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSelected, setImageSelected] = React.useState(null);

  const handleViewDetails = (image) => {
    setImageSelected(image);
    onOpen();
    window.history.pushState({}, '', '/detail');
  };

  const handleCloseDetails = () => {
    onClose();
    window.history.replaceState({}, '', '/');
  };

  return (
    <Box px={3}>
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseDetails}
        image={imageSelected}
      />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 1500: 5, 1200: 4, 800: 3, 400: 2, 200: 1 }}
      >
        <Masonry columnsCount={5} gutter="15px">
          {images.map((image, i) => (
            <Image
              onClick={() => {
                handleViewDetails(image);
              }}
              key={i}
              src={image}
              preview={false}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
}
