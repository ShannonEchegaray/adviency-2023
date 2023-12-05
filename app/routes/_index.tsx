import { Box, Text } from "@chakra-ui/react";
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
      justifyContent="center"
      alignItems="center"
    >
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
            as={"h1"}
            fontSize={"larger"}
            fontWeight={700}
          >
            Regalos:
          </Text>
          <GiftList gifts={gifts} />
      </Box>
    </Box>
  );
}
