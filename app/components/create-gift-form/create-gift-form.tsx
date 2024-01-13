import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

const CreateGiftForm: React.FC = () => {
  const [ isFocused, setIsFocused ] = useState(false);

  const handleFocus = (value: boolean) => () => {
    setIsFocused(value);
  };

  return (
    <Form method="POST" action="/gifts/add">
          <Flex>
            <Input
              borderRadius={0}
              borderLeftRadius="base"
              flexGrow={1}
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
                boxShadow: "none"
              }}
              _hover={{
                borderColor: "yellow",
              }}
              _placeholder={{
                color: "gray.200",
              }}
            />
            <NumberInput size="sm" min={1}>
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
                  boxShadow: "none"
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
                  children={<TriangleUpIcon color="white" />}
                />
                <NumberDecrementStepper 
                  children={<TriangleDownIcon color="white" />}
                />
              </NumberInputStepper>
            </NumberInput>
            <Button
              borderRadius={0}
              borderRightRadius="base"
              bg={isFocused ? "yellow" : "white"}
              px={4}
              type="submit"
              size="sm"
            >
              Agregar
            </Button>
          </Flex>
        </Form>
  );
};

export default CreateGiftForm;