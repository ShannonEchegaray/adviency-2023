import { Box, Center, Text } from "@chakra-ui/react";
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
    <Center>
      <Box>
        <Text 
          as={"h1"}
          fontSize={"larger"}
          fontWeight={700}
        >
          Regalos:
        </Text>
        <GiftList gifts={gifts} />
      </Box>
    </Center>
  );
}
