import { Box, Button, Flex, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Pagination, Spin } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HeartOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../redux/slice/ImageSlice';
import ImageModal from '../home/ImageModal';
import { setSearchData, setSearchQuery } from '../../redux/slice/SearchSlice';
import { hideLoading, showLoading } from '../../redux/slice/LoadingSlice';
import colors from '../../styles/colors';

function SearchImageGallery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.searchImage.data);
  const query = useSelector((state) => state.searchImage.query);
  const loading = useSelector((state) => state.loading.loading);

  const [loadings, setLoadings] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSelected, setImageSelected] = React.useState(null);

  useEffect(() => {
    loadImage();
    navigate({
      pathname: '/search',
      search: new URLSearchParams(query).toString(),
    });
  }, [query]);

  const handleViewDetails = (image) => {
    setImageSelected(image);
    onOpen();
    window.history.pushState({}, '', '/' + image);
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

  const loadImage = async () => {
    dispatch(showLoading());
    // Thực hiện cuộn lên đoạn mới
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const apiKey = 'D53PZTGQzqmUJ6OMygFsNs7f5NRrDkLd0H7HE1VIlhuYhffT6YPGnTxs'; // Thay YOUR_API_KEY bằng API key của bạn
    const apiUrl = `https://api.pexels.com/v1/search?query=${query.query}&per_page=${query.per_page}&page=${query.page}`; // Thay YOUR_SEARCH_TERM bằng từ khóa tìm kiếm của bạn
    fetch(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos;
        console.log(photos);
        dispatch(setSearchData(photos));
      })
      .catch((error) => console.error(error));
    dispatch(hideLoading());
  };

  const onChangePagination = (page, pageSize) => {
    dispatch(setSearchQuery({ ...query, page: page, per_page: pageSize }));
  };
  return (
    <>
      <Pagination
        current={query.page}
        total={500}
        onChange={onChangePagination}
      />
      {loading ? (
        <Box justify={'center'} align={'center'}>
          <Spin />
        </Box>
      ) : (
        <Box mr={2} ml={2} pt={3} position={'relative'} textAlign={'center'}>
          <ImageModal
            isOpen={isOpen}
            onClose={handleCloseDetails}
            image={imageSelected}
          />

          <div class="columns-1 sm:columns-2 md:columns-3">
            {imageData.map((image, index) => (
              <div key={index} className="image-box">
                <div
                  className="top-image-menu"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 20%,  rgba(0,0,0,.5) 70%, rgba(255,255,255,0) 100%)',
                  }}
                >
                  <div class="grid grid-cols-6 gap-4 hover:col-span-6">
                    <div class="col-start-1 col-end-3 flex justify-start">
                      <Avatar
                        style={{
                          backgroundColor: colors.main,
                          verticalAlign: 'middle',
                        }}
                        size="large"
                        gap={4}
                      >
                        Nhã
                      </Avatar>
                    </div>
                    <div class="col-end-10 col-span-3">
                      <Button mr={1} _hover={{ bg: 'red' }} bg={colors.main}>
                        <HeartOutlined
                          style={{
                            fontSize: 15,
                            color: colors.white,
                          }}
                        />
                      </Button>

                      <Button _hover={{ bg: colors.success }} bg={colors.info}>
                        <DownloadOutlined
                          style={{ fontSize: 15, color: colors.white }}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <LazyLoadImage
                  onClick={() => {
                    handleViewDetails(image);
                  }}
                  src={image.src.large2x}
                  effect="blur"
                />

                <div
                  className="bottom-image-menu"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,.8) 20%,  rgba(0,0,0,.2) 70%, rgba(255,255,255,0) 100%)',
                  }}
                ></div>
                <div className="logo-image">
                  <Link to={'https://www.pexels.com/'} target="_blank">
                    <img
                      src="https://cdn-images-1.medium.com/max/800/1*hCLxRgOtiWBy4ykQZ1toWQ@2x.png"
                      alt="pexels-logo"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Box>
      )}

      <Pagination
        current={query.page}
        total={500}
        onChange={onChangePagination}
      />
    </>
  );
}

export default React.memo(SearchImageGallery);
