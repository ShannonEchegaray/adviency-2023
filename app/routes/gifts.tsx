import {
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { json, type MetaFunction } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";
import CreateGiftForm from "~/components/create-gift-form/create-gift-form";
import GiftList from "~/components/ui/gift-list";
import Service from "~/service/gifts";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({
    gifts: Service.christmasGifts,
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
      <Heading as="h1" fontFamily={"xmas"} fontWeight={200} color="yellow">
        Feliz Adviency
      </Heading>
      <Outlet />
      <Box
        py="2"
        px="4"
        minW="30%"
        minH="50%"
        maxH="75%"
        borderRadius="0.5rem"
        bg="red.600"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        gap="2"
      >
        <Text fontSize={"x-large"} fontFamily={"xmas"} color="yellow">
          Regalos:
        </Text>
        <CreateGiftForm />
        <GiftList gifts={gifts} />
        <Form method="POST" action="/gifts/delete/all">
          <Button flexShrink={0} type="submit" size="sm" w="100%">
            Borrar todos
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
