import React from "react";
import { Box, Heading, Text, Flex, Stack, Link, Input, Button, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {}
      <Box bg="brand.900" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" size="lg" color="brand.700">
              Gonzo Labs
            </Heading>
            <Stack direction="row" spacing={8}>
              <Link href="/" color="brand.700">
                Home
              </Link>
              <Link href="/projects" color="brand.700">
                Projects
              </Link>
              <Link href="/about" color="brand.700">
                About
              </Link>
              <Link href="/contact" color="brand.700">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {}
      <Box bg="brand.900" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl" color="brand.700">
              Welcome to Gonzo Labs
            </Heading>
            <Text fontSize="xl" maxW="lg" color="brand.700">
              Discover our latest projects and innovations in technology. Subscribe to stay updated with our newest developments.
            </Text>
            <Flex maxW="md">
              <Input placeholder="Enter your email" mr={2} borderRadius="md" />
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="green" borderRadius="md">
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Featured Articles */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} color="brand.700">
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* Article 1 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 1" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.700">
                Project 1 Title
              </Heading>
              <Text color="brand.700">Description of Gonzo Labs Project 1 goes here. Highlight the key features and benefits of the project.</Text>
            </Box>

            {/* Article 2 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 2" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.700">
                Project 2 Title
              </Heading>
              <Text color="brand.700">Description of Gonzo Labs Project 2 goes here. Emphasize the innovative aspects and potential impact.</Text>
            </Box>

            {/* Article 3 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 3" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.700">
                Project 3 Title
              </Heading>
              <Text color="brand.700">Description of Gonzo Labs Project 3 goes here. Explain how this project solves a specific problem or addresses a need.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {}
      <Box bg="brand.900" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Text color="brand.700">&copy; 2023 Gonzo Labs. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
