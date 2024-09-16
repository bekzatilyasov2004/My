import { Box, Divider, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { SkillData } from '../constant/SkillData';
import Progres from './min-components/Progres';

const skillDescriptions = {
  htmlCss: 'Crafting semantic, accessible, and well-structured web pages with modern HTML and CSS practices. Proficient in creating layouts, animations, and custom designs.',
  javascript: 'Leveraging the power of JavaScript to build interactive and dynamic features. Skilled in ES6+ features, asynchronous programming, and client-side scripting.',
  react: 'Building robust and scalable single-page applications with React. Experienced in using hooks, context, and state management for efficient development.',
  bootstrap: 'Utilizing Bootstrap for rapid prototyping and consistent design patterns. Familiar with its grid system and component library.',
  tailwind: 'Employing Tailwind CSS for utility-first styling, enabling the creation of custom designs with flexibility and speed.',
  nextjs: 'Implementing server-side rendering and static site generation with Next.js to enhance performance and SEO.',
  typescript: 'Adding type safety and robustness to my JavaScript projects with TypeScript, improving maintainability and developer experience.',
  zushtand: 'Utilizing Zushtand for state management in complex React applications, ensuring seamless state handling and scalability.',
  chakraUI: 'Designing accessible and reusable UI components with Chakra UI, enhancing development speed and consistency.',
  mui: 'Integrating Material Design principles into applications using Material-UI, providing a modern and consistent look.',
  antd: 'Applying Ant Design components for enterprise-level UI solutions, focusing on usability and aesthetic.',
  semanticUI: 'Using Semantic UI for clean and human-friendly HTML, ensuring clear and organized code structures.',
  responsiveDesign: 'Crafting responsive layouts that adapt seamlessly to various devices and screen sizes, ensuring an optimal user experience across platforms.'
};

const Skills = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'}  >
      <Box maxW={'1290px'} w={'100%'} p={5} bg="black" borderRadius="md" boxShadow="lg">
        <Text textAlign={'center'} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} color="white">
          <Fade direction='down' duration={400} cascade>
            My Skills
          </Fade>
        </Text>
        <Box overflow={'hidden'} mt={10} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} gap={10}>
          {
            SkillData.map((item, index) => (
              <Fade key={index} duration={2000} direction='up' cascade>
                <Progres pro={item.pro} img={item.img} name={item.name} />
              </Fade>
            ))
          }
        </Box>
        <Divider mt={10} borderColor="gray.600" />
        <Stack mt={10} spacing={8}>
          {Object.entries(skillDescriptions).map(([key, description]) => (
            <Fade duration={1000} cascade>
            <Box key={key}  borderRadius="md" boxShadow="md">
              <Text fontWeight={700} fontSize={{ base: '20px', md: '24px' }} color="white">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</Text>
              <Text fontSize={{ base: '14px', md: '16px' }} color="gray.300" mt={2}>{description}</Text>
            </Box>
            </Fade>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Skills;
