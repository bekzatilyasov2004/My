import { Box } from '@chakra-ui/react';
import React from 'react'
import { Element } from 'react-scroll';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from "./components/Hero";
import Project from './components/Project';
import Skills from './components/Skills';

const Layout = () => {
    return (
        <Box>
            <Element name='home'>
                <Header />
                <Hero />
            </Element>
            <Element name='about'>
                <About />
            </Element>
            <Element name='skill'>
                <Skills />
            </Element>
            <Element name='project'>
                <Project />
            </Element>
            <Element name='contact'>
                <Contact />
            </Element>
        </Box>

    )
}

export default Layout
