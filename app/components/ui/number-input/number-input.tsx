import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  chakra,
} from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";
import React from "react";

interface BaseProps extends StyleProps {
  label: string
  name: string
  placeholder: string
  step?: number
  defaultValue?: number
  min?: number
  max?: number
}

const CustomNumberInputField = chakra(NumberInputField, {
  baseStyle: {
    _groupFocus: {
      borderColor: "yellow.100",
      boxShadow: "none",
    },
    _groupHover: {
      borderColor: "yellow",
    },
    _placeholder: {
      color: "gray.200",
    },
  },
});

// eslint-disable-next-line react/display-name
const UINumberInput: React.FC<BaseProps> = ({ 
  label, 
  step = 1,
  defaultValue = 1,
  min = 1,
  max = 100,
  ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <NumberInput 
        {...{
          step,
          defaultValue,
          min,
          max
        }}
        size="sm"
      >
        <CustomNumberInputField 
          {...props} 
        />
        <NumberInputStepper>
          <NumberIncrementStepper 
            _groupFocus={{
              borderColor: "yellow",
              boxShadow: "none",
            }}
            _groupHover={{
              borderColor: "yellow.100",
            }}
            children={<TriangleUpIcon color="white" />} />
          <NumberDecrementStepper
            _groupFocus={{
              borderColor: "yellow",
              boxShadow: "none",
            }}
            _groupHover={{
              borderColor: "yellow.100",
            }}
            children={<TriangleDownIcon color="white" />}
          />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default UINumberInput;
