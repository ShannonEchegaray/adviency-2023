import { Box, Heading, Text } from "@chakra-ui/react";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GiftList from "~/components/ui/gift-list";
import { giftsMock } from "~/mock/gifts";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({
    gifts: giftsMock
  });
};

export default function Index() {
  const { gifts } = useLoaderData<typeof loader>();

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" fontFamily={"xmas"} fontWeight={200} color="yellow">Feliz Adviency</Heading>
      <Box
        py="2"
        px="4"
        minW="30%"
        minH="50%"
        borderRadius="0.5rem"
        bg="red.600"
        boxShadow="md"
        display="flex"
        flexDirection="column"
      >
          <Text 
            fontSize={"x-large"}
            color={"yellow"}
          >
            Regalos:
          </Text>
          <GiftList gifts={gifts} />
      </Box>
    </Box>
  );
}
