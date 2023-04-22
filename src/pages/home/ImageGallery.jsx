import { Box, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Button } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import ImageModal from './ImageModal';
import colors from '../../styles/colors';
const images = [
  'https://images.pexels.com/photos/15011063/pexels-photo-15011063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/12002706/pexels-photo-12002706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/16143861/pexels-photo-16143861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/16145648/pexels-photo-16145648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/10401968/pexels-photo-10401968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/5197130/pexels-photo-5197130.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/12765592/pexels-photo-12765592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

  'https://images.pexels.com/photos/15883885/pexels-photo-15883885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/14457850/pexels-photo-14457850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3876316/pexels-photo-3876316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
export default function ImageGallery() {
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSelected, setImageSelected] = React.useState(null);
  const [imageData, setImageData] = React.useState(images);

  const handleViewDetails = (image) => {
    setImageSelected(image);
    onOpen();
    window.history.pushState({}, '', '/detail');
  };

  const handleCloseDetails = () => {
    onClose();
    window.history.replaceState({}, '', '/');
  };

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  const loadMoreImage = async () => {
    enterLoading(1);
    const apiKey = 'D53PZTGQzqmUJ6OMygFsNs7f5NRrDkLd0H7HE1VIlhuYhffT6YPGnTxs'; // Thay YOUR_API_KEY bằng API key của bạn
    const apiUrl = 'https://api.pexels.com/v1/search?query=cat&per_page=200'; // Thay YOUR_SEARCH_TERM bằng từ khóa tìm kiếm của bạn

    fetch(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos;
        // Xử lý dữ liệu danh sách ảnh ở đây

        let newArr = [];

        for (let i = 0; i < photos.length; i++) {
          const element = photos[i];
          newArr.push(element.src.large2x);
        }
        setImageData([...imageData, ...newArr]);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Box px={3} textAlign={'center'}>
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseDetails}
        image={imageSelected}
      />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 1200: 4, 800: 3, 400: 2, 200: 1 }}
      >
        <Masonry columnsCount={4} gutter="15px">
          {imageData.map((image, i) => (
            <LazyLoadImage
              onClick={() => {
                handleViewDetails(image);
              }}
              key={i}
              src={image}
              effect="blur"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Button
        style={{
          backgroundColor: colors.info,
        }}
        type="primary"
        size="large"
        icon={<PoweroffOutlined />}
        loading={loadings[1]}
        onClick={() => loadMoreImage()}
      >
        Load more
      </Button>
    </Box>
  );
}
