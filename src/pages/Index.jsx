import React from "react";
import { Box, Heading, Text, Flex, Stack, Input, Button, Image, Container, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import NavMenu from "../components/NavMenu";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {}
      <Box bg="brand.900" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" width="100%">
            <Heading as="h1" size="lg" color="brand.600">
              Gonzo Labs
            </Heading>
            <NavMenu />
          </Flex>
        </Container>
      </Box>

      {}
      <Box
        py={20}
        bgGradient="linear(to-br, brand.900, brand.800)"
        bgSize="200% 200%"
        animation="gradient 15s ease infinite"
        sx={{
          "@keyframes gradient": {
            "0%": {
              backgroundPosition: "0% 50%",
            },
            "50%": {
              backgroundPosition: "100% 50%",
            },
            "100%": {
              backgroundPosition: "0% 50%",
            },
          },
        }}
      >
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl" color="brand.600">
              Welcome to Gonzo Labs
            </Heading>
            <Text fontSize="xl" maxW="lg" color="brand.600">
              Discover our latest projects and innovations in technology. Subscribe to stay updated with our newest developments.
            </Text>
            <Flex maxW="md">
              <Input placeholder="Enter your email" mr={2} borderRadius="md" />
              <Button
                leftIcon={<Icon as={FaEnvelope} />}
                colorScheme="green"
                borderRadius="md"
                bgGradient="linear(to-r, brand.700, #00c9a7)"
                _hover={{
                  bgGradient: "linear(to-r, #00c9a7, brand.700)",
                }}
              >
                Subscribe
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {}
      <Box py={20} bg="brand.900" overflow="hidden" position="relative">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.1}
          zIndex={-1}
          transform="scale(1.1)"
          transition="transform 2s ease-out"
          _hover={{
            transform: "scale(1.2)",
          }}
        />
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} color="brand.600">
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {}
            <Box
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Image src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 1" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.600">
                <Link href="/ai-prompt-engineering">AI Prompt Engineering</Link>
              </Heading>
              <Text color="brand.600">Master the art of crafting effective prompts for AI models. Our expert guide teaches you techniques to optimize AI performance and achieve superior results.</Text>
              <Link href="/ai-prompt-engineering" color="brand.700" mt={2}>
                Read more &raquo;
              </Link>
            </Box>

            {}
            <Box
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 2" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.600">
                Generative AI Visuals
              </Heading>
              <Text color="brand.600">Explore our groundbreaking AI-powered image generation platform. Create stunning visuals with the power of artificial intelligence.</Text>
            </Box>

            {}
            <Box
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Image src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxibG9nJTIwcG9zdCUyMGltYWdlfGVufDB8fHx8MTcxMzEzNDk2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article 3" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2} color="brand.600">
                AI Consulting Services
              </Heading>
              <Text color="brand.600">Unlock the potential of AI in your business with our comprehensive consulting services. Let us guide you through the AI transformation journey.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {}
      <Box bg="brand.900" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Text color="brand.600">&copy; 2024 Gonzo Labs. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
