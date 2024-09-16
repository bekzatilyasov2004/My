import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Header = () => {
  return (
    <Box
      w={'100%'}
      h={'70px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box w={'100%'}
        h={'70px'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        p={5}>
        <Box gap={'4px'} fontSize={{ base: '25px', md: '40px' }} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
          <Fade direction='down' duration={3000} cascade>
            <Text className="logo">Beka</Text>
          </Fade>
        </Box>
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={5}>
          <Fade direction='down' cascade>
            <Link href='https://github.com/bekzatilyasov2004' target={'_blank'}>
              <FaGithub color='white' size={'20px'} />
            </Link>
            <Link href='https://instagram.com/bekzat_ilyasov' target={'_blank'}>
              <FaInstagram color='white' size={'20px'} />
            </Link>
            <Link href='https://t.me/beka_developer/' target={'_blank'}>
              <FaTelegram color='white' size={'20px'} />
            </Link>
          </Fade>
        </Box>
      </Box>
    </Box>
  )
}

export default Header