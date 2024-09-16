import React, { useState } from 'react';
import { Box, Image, Heading, Text, Stack, Button, Link } from '@chakra-ui/react';
import { FaGithub } from "react-icons/fa6";
import { PiArrowSquareInFill } from "react-icons/pi";


const ProjectCard = ({ img, name, dis, github, demo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedDescription = dis.length > 50 ? `${dis.substring(0, 50)}...` : dis;

    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
            p={5}
            m={4}
        >
            <Image
                src={`./${img}.png`}
                alt={name}
                boxSize="100%"
                objectFit="cover"
            />
            <Box mt={5}>
                <Stack spacing="4">
                    <Heading size="md">{name}</Heading>
                    <Box>
                        <Text  mb={4}>
                            {isExpanded ? dis : truncatedDescription}
                            {dis.length > 50 && (
                                <Text
                                    as="span"
                                    cursor="pointer"
                                    fontWeight={700}
                                    onClick={handleToggleDescription}
                                >
                                    {isExpanded ? ' Show Less' : ' Load More'}
                                </Text>
                            )}
                        </Text>
                    </Box>
                    <Stack spacing={2} direction="row">
                        {github && (
                            <Button
                            w={'100%'}
                                as={Link}
                                href={github}
                                colorScheme="teal"
                                isExternal
                                variant={'outline'}
                                gap={3}
                            >
                               <FaGithub /> GitHub
                            </Button>
                        )}
                        {demo && (
                            <Button
                            w={'100%'}
                                as={Link}
                                href={demo}
                                colorScheme="blue"
                                isExternal
                                variant={'outline'}
                                gap={3}
                                
                            >
                                Demo
                                <PiArrowSquareInFill />
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProjectCard;
