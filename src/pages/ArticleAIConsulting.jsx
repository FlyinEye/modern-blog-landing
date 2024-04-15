import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import NavMenu from "../components/NavMenu";

const ArticleAIConsulting = () => {
  return (
    <Box>
      <Box bg="brand.900" py={4}>
        <Container maxW="container.lg">
          <NavMenu />
        </Container>
      </Box>
      <Box py={20} bg="brand.800">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={8} color="brand.600">
            AI Consulting Services: Unlocking the Potential of AI for Your Business
          </Heading>
          <Text fontSize="xl" color="brand.600">
            Our AI Consulting Services help businesses harness the power of artificial intelligence to drive innovation, optimize operations, and gain a competitive edge. Our team of experienced AI consultants works closely with you to understand your unique challenges and goals, and develops tailored AI solutions that deliver measurable results.
          </Text>
          <Text fontSize="xl" mt={8} color="brand.600">
            Our AI Consulting Services include:
          </Text>
          <Text fontSize="xl" mt={4} color="brand.600">
            1. AI Strategy Development
          </Text>
          <Text fontSize="xl" mt={4} color="brand.600">
            2. AI Solution Design and Implementation
          </Text>
          <Text fontSize="xl" mt={4} color="brand.600">
            3. AI Model Training and Optimization
          </Text>
          <Text fontSize="xl" mt={4} color="brand.600">
            4. AI Integration and Deployment
          </Text>
          <Text fontSize="xl" mt={8} color="brand.600">
            Whether you're looking to automate processes, improve decision-making, or create intelligent products and services, our AI Consulting Services can help you achieve your goals. Contact us today to learn more about how we can help your business succeed with AI.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default ArticleAIConsulting;
