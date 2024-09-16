import { Box, Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Texts from './min-components/Texts';
import TicTacToe from './min-components/TicTacToe';
import SnakeGame from './min-components/SnakeGame';
import { Fade } from 'react-awesome-reveal';
import Mobile from './min-components/Mobile';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      w={'100%'}
      background={'black'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Container maxW="1290px" p={0}>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-around'}
          textAlign={{ base: 'center', md: 'start' }}
          alignItems={'center'}
          gap={{ base: '5', md: '10' }}
        >
          <Texts />
          <TicTacToe />
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          justifyContent={'space-around'}
          alignItems={'center'}
          gap={{ base: '5', md: '10' }}
        >
          <Fade direction='left'>
            <SnakeGame />
          </Fade>
          <Box
            gap={10}
            w={'300px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Fade  direction='up' cascade>
              <Text textAlign={'center'}>
                Hi, I'm Ilyasov Bekzat, I'm a Frontend developer based on React js. I have been improving my knowledge in this field for 2 years...
              </Text>
              <Button as={Link} to={'about'} smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={-70} variant={'outline'}>Load more...</Button>
            </Fade>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Mobile />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
