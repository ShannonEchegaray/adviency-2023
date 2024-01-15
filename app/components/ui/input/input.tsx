import { FormControl, FormLabel, Input, chakra } from '@chakra-ui/react';
import type { StyleProps } from "@chakra-ui/react";
import React from "react";

type BaseProps = {
  label: string
  name: string
  placeholder: string
} & StyleProps

const CustomInput = chakra(Input, {
  baseStyle: {
    _focus: {
      borderColor: "yellow",
      boxShadow: "none",
    },
    _hover: {
      borderColor: "yellow",
    },
    _placeholder: {
      color: "gray.200",
    }
  }
});

// eslint-disable-next-line react/display-name
const UIInput: React.FC<BaseProps> = ({ label, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <CustomInput 
        {...props}
        size={"sm"}
      />
    </FormControl>
  );
};

export default UIInput;