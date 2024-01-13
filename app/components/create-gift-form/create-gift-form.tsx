import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

const CreateGiftForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (value: boolean) => () => {
    setIsFocused(value);
  };

  return (
    <Form method="POST" action="/gifts/add">
      <Flex>
        <Input
          borderRadius={0}
          borderLeftRadius="base"
          flexGrow={2}
          placeholder="Ingrese su regalo..."
          size="sm"
          name="gift"
          type="text"
          borderRightWidth="0"
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
          boxShadow={isFocused ? "base" : "none"}
          borderColor={isFocused ? "yellow" : "none"}
          _focus={{
            borderColor: "yellow",
            boxShadow: "none",
          }}
          _hover={{
            borderColor: "yellow",
          }}
          _placeholder={{
            color: "gray.200",
          }}
        />
        <Input
          borderRadius={0}
          flexGrow={2}
          placeholder="URL..."
          size="sm"
          name="gift"
          type="text"
          borderRightWidth="0"
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
          boxShadow={isFocused ? "base" : "none"}
          borderColor={isFocused ? "yellow" : "none"}
          _focus={{
            borderColor: "yellow",
            boxShadow: "none",
          }}
          _hover={{
            borderColor: "yellow",
          }}
          _placeholder={{
            color: "gray.200",
          }}
        />
        <NumberInput size="sm" min={1} flexShrink={0.5}>
          <NumberInputField
            borderRadius={0}
            borderRightWidth={0}
            placeholder="Cantidad"
            name="quantity"
            onFocus={handleFocus(true)}
            onBlur={handleFocus(false)}
            boxShadow={isFocused ? "base" : "none"}
            borderColor={isFocused ? "yellow" : "none"}
            _focus={{
              borderColor: "yellow",
              boxShadow: "none",
            }}
            _hover={{
              borderColor: "yellow",
            }}
            _placeholder={{
              color: "gray.200",
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper
              boxShadow={isFocused ? "base" : "none"}
              borderColor={isFocused ? "yellow" : "none"}
              children={<TriangleUpIcon color="white" />}
            />
            <NumberDecrementStepper
              boxShadow={isFocused ? "base" : "none"}
              borderColor={isFocused ? "yellow" : "none"}
              children={<TriangleDownIcon color="white" />}
            />
          </NumberInputStepper>
        </NumberInput>
        <Button
          flexShrink={0}
          borderRadius={0}
          borderRightRadius="base"
          bg={isFocused ? "yellow" : "white"}
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
