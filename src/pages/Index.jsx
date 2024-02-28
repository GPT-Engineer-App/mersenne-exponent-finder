import { useState } from "react";
import { Box, Button, Input, VStack, Text, List, ListItem } from "@chakra-ui/react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [mersenneExponents, setMersenneExponents] = useState([]);

  // Known exponents of Mersenne primes (this is not an exhaustive list)
  const KNOWN_EXPONENTS = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const findMersenneExponents = () => {
    const maxExponent = parseInt(inputValue, 10);
    if (!isNaN(maxExponent)) {
      const exponents = KNOWN_EXPONENTS.filter((exponent) => exponent <= maxExponent);
      setMersenneExponents(exponents);
    } else {
      setMersenneExponents([]);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text mb={2}>Enter a number to find Mersenne prime exponents:</Text>
        <Input placeholder="Enter a number" value={inputValue} onChange={handleInputChange} />
        <Button mt={2} onClick={findMersenneExponents}>
          Find Exponents
        </Button>
      </Box>
      <Box>
        <Text mb={2}>Mersenne prime exponents:</Text>
        <List>
          {mersenneExponents.map((exponent) => (
            <ListItem key={exponent}>{exponent}</ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
