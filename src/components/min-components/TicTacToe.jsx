import React, { useState } from 'react';
import { Box, Button, Grid, Text, useToast } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';


const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); 
  const winner = calculateWinner(squares);
  const toast = useToast();


  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const currentWinner = calculateWinner(newSquares);
    if (currentWinner) {
      toast({
        title: `Player ${currentWinner} wins!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else if (newSquares.every(square => square)) {
      toast({
        title: 'Draw!',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box
      textAlign="center"
      mt={5}
      p={5}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      borderRadius="md"
      boxShadow="md"
    >
        <Fade direction='right' cascade>
      <Text fontSize="2xl" mb={4} color="white">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {squares.map((square, i) => (
            <Fade cascade>
          <Button
            key={i}
            w="60px"
            h="60px"
            fontSize="2xl"
            colorScheme={square === 'X' ? 'blue' : square === 'O' ? 'red' : 'gray'}
            onClick={() => handleClick(i)}
            disabled={!!square || !!winner}
            _hover={{ bg: 'teal.600' }}
            _active={{ bg: 'teal.700' }}
            borderRadius="md"
            p={0}
          >
            {square}
          </Button>
            </Fade>
        ))}
      </Grid>
      <Button
        mt={5}
        colorScheme="teal"
        onClick={resetGame}
        variant="outline"
      >
        Restart
      </Button>
        </Fade>
    </Box>
  );
};

export default TicTacToe;
