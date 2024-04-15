import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" mt={8} mb={12}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mx="auto" maxW="7xl">
        {}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;