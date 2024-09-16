import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

import { ProjectData } from '../constant/ProjectData';
import ProjectCard from './card/ProjectCatd';
import { Bounce, Fade } from 'react-awesome-reveal';
import { PiArrowSquareInFill } from 'react-icons/pi';

const Project = () => {
  return (
    <Box w={'100%'} mt={10} p={5} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Text textAlign={'center'} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} color="white">
        <Fade direction='down' duration={400} cascade>
          Projects
        </Fade>
      </Text>
      <Box mt={5} maxW={'1290px'} p={5} display={'flex'} justifyContent={'space-around'} alignItems={'start'} flexWrap={'wrap'}>
        <Bounce duration={700} cascade>
          {
            ProjectData.map((item, index) => (
              <ProjectCard
                key={index}
                img={item.img}
                name={item.name}
                dis={item.dis}
                github={item.github}
                demo={item.demo}
              />
            ))
          }
        </Bounce>
      </Box>
      <Fade direction='up'>
      <Link href={'https://github.com/bekzatilyasov2004/'} target={'_blank'}>
      <Flex mt={5}  fontSize={{base: '15px', md: '20px'}} alignItems={'center'} gap={5} textAlign={'center'} fontWeight={700}  color="white">
        <Text>If you want to see my other projects, you can visit my github page <Text color={'blue.400'}>(Click To Go)</Text></Text>
      </Flex>
      </Link>
      </Fade>
    </Box>
  );
};

export default Project;
