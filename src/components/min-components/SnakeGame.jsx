import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, useToast, Text } from '@chakra-ui/react';


const gridSize = 20; 
const initialSnake = [{ x: 2, y: 2 }];
const initialFood = { x: 5, y: 5 };
const cellSize = 18;
const gameSpeed = 250;

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState('RIGHT');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toast = useToast();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isGameOver || !isGameStarted) return;
    intervalRef.current = setInterval(moveSnake, gameSpeed);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [direction, snake, isGameOver, isGameStarted]);

  useEffect(() => {
    if (isGameOver || !isGameStarted) return;
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [direction, isGameOver, isGameStarted]);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') setDirection('UP');
        break;
      case 'ArrowDown':
        if (direction !== 'UP') setDirection('DOWN');
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length > 1) return; 
    const touch = e.touches[0];
    if (touch.clientX < window.innerWidth / 2) {
      setDirection('LEFT');
    } else {
      setDirection('RIGHT');
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 1) return; 
    const touch = e.touches[0];
    if (touch.clientY < window.innerHeight / 2) {
      setDirection('UP');
    } else {
      setDirection('DOWN');
    }
  };

  const moveSnake = () => {
    if (isGameOver) return;

    const newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      newSnake.push(newSnake[newSnake.length - 1]); 
      setFood(generateRandomFood());
    } else {
      newSnake.pop(); 
    }

    if (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setIsGameOver(true);
      toast({
        title: 'Game Over',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      clearInterval(intervalRef.current);
      return;
    }

    setSnake(newSnake);
  };

  const generateRandomFood = () => {
    let newFood;
    do {
      newFood = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

  const resetGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection('RIGHT');
    setIsGameOver(false);
    setIsGameStarted(false);
  };

  const startGame = () => {
    setIsGameStarted(true);
    setIsGameOver(false);
  };

  const changeDirection = (newDirection) => {
    if (direction === 'UP' && newDirection !== 'DOWN') setDirection(newDirection);
    if (direction === 'DOWN' && newDirection !== 'UP') setDirection(newDirection);
    if (direction === 'LEFT' && newDirection !== 'RIGHT') setDirection(newDirection);
    if (direction === 'RIGHT' && newDirection !== 'LEFT') setDirection(newDirection);
  };

  return (
    <Box>
    <Box
      mt={{ base: '10', md: '100' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="black"
      overflow="hidden"
      position="relative"

      w={`${gridSize * cellSize}px`}
      h={`${gridSize * cellSize}px`}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        bg="black"
        border="1px solid white"
      >
        {snake.map((segment, index) => (
          <Box
            key={index}
            boxShadow={'0 0 1000px'}
            position="absolute"
            top={`${segment.y * cellSize}px`}
            left={`${segment.x * cellSize}px`}
            w={`${cellSize}px`}
            h={`${cellSize}px`}
            bg="green"
            borderRadius={'7px'}
          />
        ))}
        <Box
          position="absolute"
          top={`${food.y * cellSize}px`}
          left={`${food.x * cellSize}px`}
          w={`${cellSize}px`}
          h={`${cellSize}px`}
          bg={'red.900'}
          borderRadius={'100%'}
        />
      </Box>
      {!isGameStarted && !isGameOver && (
        <Button
          position="absolute"
          bottom={4}
          colorScheme="teal"
          onClick={startGame}
          variant={'outline'}
        >
          Start Game
        </Button>
      )}
      {isGameOver && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight={'bold'} color="yellow" mb={4}>Game Over</Text>
          <Button
            colorScheme="teal"
            onClick={resetGame}
            variant={'outline'}
          >
            Restart
          </Button>
        </Box>
      )}
    </Box>
      <Box
        display={{base: 'flex', md: 'none'}}
        flexDirection="column"
        alignItems="center"
        mt={4}
      >
        <Button
          mb={2}
          onClick={() => changeDirection('UP')}
          colorScheme="blue"
        >
          ↑
        </Button>
        <Box display="flex">
          <Button
            mr={2}
            onClick={() => changeDirection('LEFT')}
            colorScheme="blue"
          >
            ←
          </Button>
          <Button
            ml={2}
            onClick={() => changeDirection('RIGHT')}
            colorScheme="blue"
          >
            →
          </Button>
        </Box>
        <Button
          mt={2}
          onClick={() => changeDirection('DOWN')}
          colorScheme="blue"
        >
          ↓
        </Button>
      </Box>
    </Box>
  );
};

export default SnakeGame;
