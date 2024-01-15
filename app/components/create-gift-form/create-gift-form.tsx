import {
  Button,
  Flex,
} from "@chakra-ui/react";
import { Form, useNavigation } from "@remix-run/react";
import React, { useEffect } from "react";
import UIInput from "../ui/input/input";
import UINumberInput from "../ui/number-input/number-input";

interface CreateGiftFormProps {
  route: string
  defaultValues?: {}
}

const CreateGiftForm: React.FC<CreateGiftFormProps> = ({ route }) => {

  useEffect(() => {

  }, []);
  const handler = (e: React.FormEvent<HTMLFormElement>) => e.currentTarget.reset();

  return (
    <Form 
      method="POST" 
      action={route}
      onSubmit={handler}
    >
      <Flex 
        pb={2}
        direction={"column"}
        gap={4}
      >
        <UIInput 
          label="Nombre"
          name="gift"
          placeholder="Ingrese su Regalo..."
        />
        <UIInput
          label="URL Imagen"
          placeholder="URL..."
          name="url"
        />
        <UINumberInput
          label="Cantidad"
          placeholder="Cantidad..."
          name="quantity"
        />
        <Button
          flexShrink={0}
          borderRadius={0}
          borderRightRadius="base"
          _hover={{
            bg: "yellow"
          }}
          type="submit"
          size="sm"
          px={4}
        >
          Agregar
        </Button>
      </Flex>
    </Form>
  );
};

export default CreateGiftForm;
