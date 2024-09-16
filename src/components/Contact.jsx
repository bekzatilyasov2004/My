import { Box, Input, Textarea, Button, FormControl, FormLabel, useToast, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
    };

    const telegramMessage = `New Contact Request:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;

    const botToken = '7156172208:AAF9Bkg4VIBAFC5qJI6nPeoimgbdFUrmyLw';
    const chatId = '5090182735';

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });

      if (response.ok) {
        toast({
          description: 'Your message has been successfully sent to Telegram.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        toast({
          description: 'There was an issue sending your message to Telegram.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        description: `An error occurred: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="100%"  p={5} display="flex" justifyContent={'space-around'} flexDir={'column'} alignItems="center" >
      <Text textAlign={'center'} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} color="white">
        <Fade direction='down' duration={400} cascade>
          Contact 
        </Fade>
      </Text>
      <Box  p={5} border={'1px solid'} display={'flex'} flexDirection={{base: 'column-reverse', md: 'row'}} justifyContent={'center'} alignItems={'center'}>
        <Box p={{base: '0', md: '10'}}  mb={{base: '70px', md: '10px'}} borderRadius="md" boxShadow="lg" >
          <Box textAlign={{base: 'center', md: 'start'}} mt={{base: '20px', md: '0px'}}>
            <Slide direction='down'>
          <Text fontSize={{base: '25px', md: '30px'}} mb={10}>Contact me</Text>
            </Slide>
          </Box>
          <form onSubmit={handleSubmit}>
            <Fade direction='left' cascade>
            <FormControl isRequired mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>
            <FormControl isRequired mb={4}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>
            <FormControl isRequired mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>
            <FormControl isRequired mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>
            <Button type="submit" variant={'outline'} colorScheme="blue" width="full" size="lg">
              Submit
            </Button>
            </Fade>
          </form>
        </Box>
        <Zoom direction='up'>
        <Box >
          <Image w={{base: '300px', md: '500px'}} h={{base: '300px', md: '500px'}} src='./contact.jpg' alt={'contact'} />
        </Box>
        </Zoom>
      </Box>
    </Box>
  );
};

export default Contact;
