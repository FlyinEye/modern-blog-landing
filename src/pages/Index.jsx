import React from "react";
import { Box, Heading, Text, Flex, Stack, Link, Input, Button, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" size="lg">
              My Blog
            </Heading>
            <Stack direction="row" spacing={8}>
              <Link href="#">Home</Link>
              <Link href="#">Articles</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">
              Welcome to My Blog
            </Heading>
            <Text fontSize="xl" maxW="lg">
              Discover insightful articles and stories on various topics. Subscribe to stay updated with the latest posts.
            </Text>
            <Flex maxW="md">
              <Input placeholder="Enter your email" mr={2} borderRadius="md" />
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="blue" borderRadius="md">
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Featured Articles */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* Article 1 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 1" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Article 1 Title
              </Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget aliquam augue nulla eu sapien.</Text>
            </Box>

            {/* Article 2 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 2" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Article 2 Title
              </Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget aliquam augue nulla eu sapien.</Text>
            </Box>

            {/* Article 3 */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 3" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Article 3 Title
              </Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget aliquam augue nulla eu sapien.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Text>&copy; 2023 My Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
