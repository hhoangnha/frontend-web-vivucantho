import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import { CaretLeftOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('#root');
      const navbarHeight = navbar.getBoundingClientRect().height;
      const navbarTop = navbar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (window.pageYOffset === 0) {
        setScroll(false);
      } else if (windowHeight <= navbarTop + navbarHeight) {
        setScroll(true);
      }
    });
  }, []);

  return (
    <Box
      // bg={useColorModeValue('white', 'tr')}
      // bg={'transparent'}
      bg={scroll ? 'white' : 'rgba(0,0,0,0.2)'}
      top={0}
      position={'sticky'}
      zIndex={10}
      width={'100%'}
      transition="background-color 0.2s"
    >
      <Flex
        // bg={useColorModeValue('white', 'gray.800')}
        // bg={'transparents'}
        // color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        maxW={'10xl'}
        width={'full'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        // position={'fixed'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} align={'center'}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            onClick={() => {
              navigate('/');
            }}
          >
            <ArrowBackIcon fontSize={20} />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={5}>
            <DesktopNav scroll={scroll} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ scroll }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} style={{ width: 500 }}>
      <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
        <button class="outline-none focus:outline-none">
          <svg
            class=" w-5 text-gray-600 h-5 cursor-pointer"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          placeholder="search for images"
          x-model="q"
          class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
        />
        <div class="select">
          <select
            id=""
            x-model="image_type"
            class="text-sm outline-none focus:outline-none bg-transparent"
          >
            <option value="all" selected>
              All
            </option>
            <option value="photo">Photo</option>
            <option value="illustration">Illustration</option>
            <option value="vector">Vector</option>
          </select>
        </div>
      </div>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      // position={'fixed'}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      <Stack direction={'row'} spacing={4} style={{ width: '100%' }}>
        <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <button class="outline-none focus:outline-none">
            <svg
              class=" w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            placeholder="search for images"
            x-model="q"
            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          />
          <div class="select">
            <select
              id=""
              x-model="image_type"
              class="text-sm outline-none focus:outline-none bg-transparent"
            >
              <option value="all" selected>
                All
              </option>
              <option value="photo">Photo</option>
              <option value="illustration">Illustration</option>
              <option value="vector">Vector</option>
            </select>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration ',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
