import { Flex, Image, Text } from '@chakra-ui/react';
import { Progress } from 'antd';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Progres = ({ pro, img, name }) => {
  const status = pro === 100 ? '' : 'active';
  const percentStyle = {
    color: 'white'
  };

  return (
    <Flex gap={2} direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Progress 
        type='dashboard' 
        status={status} 
        percent={pro} 
        format={(percent) => (
          <span style={percentStyle}>{percent}%</span>
        )}
      />
      <Fade  cascade>
      <Image w={'50px'} src={`./${img}.png`} alt={name} />
      </Fade>
      <Text fontWeight={700} fontSize={{ base: '15px', md: '18px' }}>
        <Fade duration={300} cascade>
        {name}
        </Fade>
      </Text>
    </Flex>
  );
}

export default Progres;
