import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const Texts = () => {
  return (
    <Box >
        <Text fontSize={'40px'} className='name'>
            <Fade duration={300} cascade>Hi There... 👋</Fade></Text>
        <Text className='icon' fontSize={{base: '35', md: '65'}}><Slide direction='left' >I'm</Slide></Text>
        <Text className='icon' fontSize={{base: '25', md: '40'}} ><Fade direction='up' >Bekzat Ilyasov</Fade></Text>
    </Box>
  )
}

export default Texts
