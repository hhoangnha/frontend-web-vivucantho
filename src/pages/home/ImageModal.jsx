import React, { useState } from 'react';
import {
  Col,
  Row,
  Button as ButtonAntd,
  List,
  Space,
  Avatar,
  Image as ImageAntd,
  Divider,
  Collapse,
  theme,
} from 'antd';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  Box,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Popover,
  PopoverTrigger,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Badge,
  useColorModeValue,
  Stack,
  Link,
  Center,
  position,
  ListItem,
  ListIcon,
  List as ListChakra,
} from '@chakra-ui/react';
import { HeartOutlined, CaretRightOutlined } from '@ant-design/icons';
import colors from '../../styles/colors';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ImageGallery from './ImageGallery';
import ImageGallerySuggestion from './ImageGallerySuggestion';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const { Panel } = Collapse;

export default function ImageModal({ isOpen, onClose, image }) {
  const [loadings, setLoadings] = useState([]);

  const panelStyle = {
    marginBottom: 5,
    background: 'transparent',
    borderRadius: 'none',
    border: 'none',
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

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={'full'}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader padding={2}>
            <Row justify={'space-between'}>
              Modal Title
              <Box mr={10}>
                <Row>
                  <Box>
                    <ButtonAntd
                      style={{
                        background: colors.secondary,
                        height: 40,
                        width: 40,
                        justifyContent: 'center',
                      }}
                      type="primary"
                      icon={<HeartOutlined />}
                      loading={loadings[2]}
                      size="large"
                      onClick={() => enterLoading(2)}
                    ></ButtonAntd>
                  </Box>
                  <Box ml={2}>
                    <Popover placement="bottom" isLazy>
                      <PopoverTrigger>
                        <Button
                          rightIcon={<ChevronDownIcon />}
                          colorScheme="green"
                          w="fit-content"
                        >
                          Download
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent _focus={{ boxShadown: 'none' }}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader fontWeight="bold">Option</PopoverHeader>
                        <PopoverBody w="full">
                          <Tabs isLazy colorScheme="green">
                            <TabList>
                              <Tab
                                _focus={{ boxShadow: 'none' }}
                                fontSize="xs"
                                fontWeight="bold"
                                w="50%"
                              >
                                Access
                              </Tab>
                              <Tab
                                _focus={{ boxShadow: 'none' }}
                                fontSize="xs"
                                fontWeight="bold"
                                w="50%"
                              >
                                Services
                              </Tab>
                            </TabList>
                            <TabPanels>
                              <TabPanel>
                                {/* You can add your content here. */}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Elementum curabitur vitae nunc sed velit
                                dignissim sodales ut eu. Mauris nunc congue nisi
                                vitae suscipit tellus mauris a diam. Eros in
                                cursus turpis massa tincidunt.
                              </TabPanel>
                              <TabPanel>
                                {/* You can add your content here. */}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Elementum curabitur vitae nunc sed velit
                                dignissim sodales ut eu. Mauris nunc congue nisi
                                vitae suscipit tellus mauris a diam. Eros in
                                cursus turpis massa tincidunt.
                              </TabPanel>
                            </TabPanels>
                          </Tabs>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                </Row>
              </Box>
            </Row>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody m={0} p={0}>
            <Box flex={1} p={2} background={colors.light}>
              <Row>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 14 }}
                  style={{ marginBottom: 5 }}
                >
                  <center>
                    <TransformWrapper
                      initialScale={1}
                      // initialPositionX={200}
                      // initialPositionY={100}
                    >
                      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                          <div
                            className="tools"
                            style={{
                              position: 'absolute',
                              zIndex: 1000,
                              right: 0,
                              width: 100,
                              backgroundColor: 'rgba(0,0,0,0.8)',
                              padding: 10,
                            }}
                          >
                            <button onClick={() => zoomIn()}>+</button>
                            <button onClick={() => zoomOut()}>-</button>
                            <button onClick={() => resetTransform()}>x</button>
                          </div>
                          <TransformComponent>
                            <Image maxH={750} src={image} alt="Dan Abramov" />
                          </TransformComponent>
                        </React.Fragment>
                      )}
                    </TransformWrapper>
                  </center>
                </Col>
                <Col xs={1} md={1} xl={1} />

                <Col xs={{ span: 22 }} md={{ span: 8 }} xl={8}>
                  <Center>
                    <Box
                      // maxW={'500px'}
                      w={'full'}
                      bg={useColorModeValue('white', 'red.800')}
                      boxShadow={'xl'}
                      // rounded={'lg'}
                      p={3}
                      textAlign={'center'}
                    >
                      <Avatar
                        size={'xl'}
                        src={
                          'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                        _after={{
                          content: '""',
                          w: 4,
                          h: 4,
                          bg: 'green.300',
                          border: '2px solid white',
                          rounded: 'full',
                          pos: 'absolute',
                          bottom: 0,
                          right: 3,
                        }}
                      />
                      <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Lindsey James
                      </Heading>
                      <Text fontWeight={600} color={'gray.500'} mb={4}>
                        @lindsey_jam3s
                      </Text>
                      <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}
                      >
                        Actress, musician, songwriter and artist. PM for work
                        inquires or{' '}
                        <Link href={'#'} color={'blue.400'}>
                          #tag
                        </Link>{' '}
                        me in your posts
                      </Text>

                      <Stack
                        align={'center'}
                        justify={'center'}
                        direction={'row'}
                        mt={2}
                        mb={5}
                      >
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          fontWeight={'400'}
                        >
                          #art
                        </Badge>
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          fontWeight={'400'}
                        >
                          #photography
                        </Badge>
                        <Badge
                          px={2}
                          py={1}
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          fontWeight={'400'}
                        >
                          #music
                        </Badge>
                      </Stack>

                      <Stack>
                        <ImageAntd.PreviewGroup preview={false}>
                          <Row justify={'center'} gutter={20} wrap={true}>
                            <Col span={4}>
                              <ImageAntd
                                width={70}
                                height={70}
                                src="https://images.pexels.com/photos/16143861/pexels-photo-16143861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                              />
                            </Col>
                            <Col span={4}>
                              {' '}
                              <ImageAntd
                                width={70}
                                src="https://picsum.photos/300/300?image=206"
                              />
                            </Col>
                            <Col span={4}>
                              <ImageAntd
                                width={70}
                                height={70}
                                src="https://images.pexels.com/photos/16143861/pexels-photo-16143861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                              />
                            </Col>
                            <Col span={4}>
                              {' '}
                              <ImageAntd
                                width={70}
                                src="https://picsum.photos/300/300?image=206"
                              />
                            </Col>
                          </Row>
                        </ImageAntd.PreviewGroup>
                      </Stack>

                      {/* <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          rounded={'full'}
                          _focus={{
                            bg: 'gray.200',
                          }}
                        >
                          Message
                        </Button>
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          rounded={'full'}
                          bg={'blue.400'}
                          color={'white'}
                          boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                          }
                          _hover={{
                            bg: 'blue.500',
                          }}
                          _focus={{
                            bg: 'blue.500',
                          }}
                        >
                          Follow
                        </Button>
                      </Stack> */}
                    </Box>
                  </Center>

                  <Divider></Divider>
                  {/* <Center> */}
                  <Box
                    w={'full'}
                    bg={useColorModeValue('white', 'red.800')}
                    boxShadow={'xl'}
                    p={3}
                    textAlign={'center'}
                  >
                    <Box textAlign={'left'}>
                      <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => (
                          <CaretRightOutlined rotate={isActive ? 90 : 0} />
                        )}
                        style={{ background: 'transparent' }}
                      >
                        <Panel
                          header="Photo Infomation"
                          key="1"
                          style={panelStyle}
                        >
                          <ListChakra spacing={1}>
                            <ListItem>
                              <Row>
                                <Col span={16}>
                                  <Text
                                    fontWeight={600}
                                    color={'gray.500'}
                                    fontSize="sm"
                                  >
                                    Image Type
                                  </Text>
                                </Col>
                                <Col span={8}>PNG</Col>
                              </Row>
                            </ListItem>
                            <ListItem>
                              <Row>
                                <Col span={16}>
                                  <Text
                                    fontWeight={600}
                                    color={'gray.500'}
                                    fontSize="sm"
                                  >
                                    Resolution
                                  </Text>
                                </Col>
                                <Col span={8}>2500x2000</Col>
                              </Row>
                            </ListItem>
                            <ListItem>
                              <Row>
                                <Col span={16}>
                                  <Text
                                    fontWeight={600}
                                    color={'gray.500'}
                                    fontSize="sm"
                                  >
                                    Size
                                  </Text>
                                </Col>
                                <Col span={8}>3Mb</Col>
                              </Row>
                            </ListItem>
                            <ListItem>
                              <Row>
                                <Col span={16}>
                                  <Text
                                    fontWeight={600}
                                    color={'gray.500'}
                                    fontSize="sm"
                                  >
                                    View
                                  </Text>
                                </Col>
                                <Col span={8}>1000</Col>
                              </Row>
                            </ListItem>
                            <ListItem>
                              <Row>
                                <Col span={16}>
                                  <Text
                                    fontWeight={600}
                                    color={'gray.500'}
                                    fontSize="sm"
                                  >
                                    Download
                                  </Text>
                                </Col>
                                <Col span={8}>4</Col>
                              </Row>
                            </ListItem>
                          </ListChakra>
                        </Panel>
                      </Collapse>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Box>

            <Divider>For you</Divider>
            <ImageGallerySuggestion />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
