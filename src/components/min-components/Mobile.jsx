import { Box } from '@chakra-ui/react';
import React from 'react';
import { IoIosHome, IoIosPeople } from "react-icons/io";
import { SiAboutdotme, SiHyperskill, SiNounproject } from "react-icons/si";
import { Link } from 'react-scroll';

const Mobile = () => {
  return (
    <Box
      w={{ base: '360px', md: '360px' }}
      h={'50px'}
      borderRadius={{ base: '0', md: '30px' }}
      position={'fixed'}
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={'center'}
      bottom={10}
      backdropFilter={'blur(5px)'}
      zIndex={10}  
    >
      <Link className='pointer'
        to="home" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <IoIosHome size={'25px'} />
      </Link>
      <Link className='pointer'
        to="about" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <SiAboutdotme size={'25px'}  />
      </Link>
      <Link className='pointer'
        to="skill" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <SiHyperskill size={'25px'}  />
      </Link>
      <Link className='pointer'
        to="project" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <SiNounproject size={'25px'}  />
      </Link>
      <Link className='pointer'
        to="contact" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <IoIosPeople size={'25px'}  />
      </Link>
    </Box>
  );
}

export default Mobile;
