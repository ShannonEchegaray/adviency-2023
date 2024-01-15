import {
  Box,
  Button,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { json, type MetaFunction } from "@remix-run/node";
import { Form, Outlet, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect } from "react";
import CreateGiftForm from "~/components/create-gift-form/create-gift-form";
import GiftList from "~/components/ui/gift-list";
import Modal from "~/components/ui/modal/modal";
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
  const transition = useNavigation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const isSubmitting = transition.state === "submitting";

  useEffect(() => {
    if(isSubmitting){
      onClose();
    }
  }, [isSubmitting]);

  return (
    <>
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
        <Button onClick={onOpen}>Agregar regalo</Button>
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
          <GiftList gifts={gifts} />
          <Form method="POST" action="/gifts/delete/all">
            <Button flexShrink={0} type="submit" size="sm" w="100%">
              Borrar todos
            </Button>
          </Form>
        </Box>
      </Box>
      <Modal 
        title="Agregar Regalo"
        content={<CreateGiftForm route="/gifts/add" />}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}
