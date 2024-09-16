import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Bounce, Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <Box w={'100%'} display={'flex'} justifyContent={'space-around'}>
      <Box maxW={'1290px'} mt={5} >
        <Text textAlign={'center'} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} >
          <Fade direction='down' duration={400} cascade>
            About Me
          </Fade>
        </Text>
        <Fade direction='up' cascade>
          <Box  overflow={'hidden'}   p={5} borderRadius={'20px'}>
          <Text textAlign={{ base: ' center', md: 'start' }} as={Fade}  direction='left'  mt={5} mb={5} fontWeight={700} fontSize={{ base: '17px', md: '25px' }} >Hi, I'm Ilyasov Bekzat</Text>
          <Text duration={1000} as={Fade} fontSize={{ base: '16px', md: '20px' }}>I'm a passionate and dedicated Frontend Developer with over two years of experience in creating dynamic, user-centric web applications. My expertise spans a wide array of technologies and frameworks, allowing me to build responsive and visually appealing interfaces that enhance user experience.</Text>
        </Box>
        </Fade>
        <Box mt={10} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDirection={{ base: 'column', md: 'row' }}>
        <Bounce duration={1000} cascade>
          <Box p={5}>
            <Text>
              I bring a keen eye for detail, a passion for coding, and a commitment to creating high-quality web experiences. My diverse skill set allows me to tackle challenges from various angles and deliver solutions that meet modern web standards.
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} p={5}>
            <Text fontSize={{ base: '30px', md: '35px' }} className='logo'>V</Text>
            <Text fontSize={{ base: '30px', md: '35px' }} className='logo'>S</Text>
          </Box>
          <Box p={5}>
            <Text>Whether working independently or as part of a team, I strive to stay updated with the latest industry trends and continuously improve my skill set. My goal is to build user-friendly, high-performance applications that not only meet but exceed expectations.</Text>
          </Box>
        </Bounce>
        </Box>
      </Box>
    </Box>
  )
}

export default About