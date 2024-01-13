import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { json, type MetaFunction } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";
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
    gifts: Service.christmasGifts
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
      <Outlet />
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
        gap="2"
      >
          <Text 
            fontSize={"x-large"}
            color="yellow"
          >
            Regalos:
          </Text>
          <Form method="POST" action="/gifts/add">
            <InputGroup
              size="sm"
            >
              <Input 
                name="gift"
                type="text" 
                borderRadius="base"
                _focus={{
                  borderColor: "yellow",
                  boxShadow: "none"
                }}
              />
              <InputRightElement w="auto" >
                <Button type="submit" size="sm" borderRadius="base">Agregar</Button>
              </InputRightElement>
            </InputGroup>
          </Form>
          <GiftList gifts={gifts} />
          <Form method="POST" action="/gifts/delete/all">
              <Button
                type="submit"
                size="sm"
                w="100%"
              >
                Borrar todos
              </Button>
          </Form>
      </Box>
    </Box>
  );
}
