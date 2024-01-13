import { Box, Button, Icon, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Form } from "@remix-run/react";
import React from "react";
import { type Gift } from "~/service/gifts";

interface GiftListProps {
  gifts: Gift[];
}

const GiftList: React.FC<GiftListProps> = ({ gifts }) => {

  if(gifts.length === 0){
    return (
      <Box
        flexGrow={1}
      >
        <Text 
          fontSize="smaller" 
          color="gray.50"
          align="center"
        >No hay regalos</Text>
      </Box>
      );
  }

  return (
    <List 
      spacing={1}
      flexGrow={1}
      overflowY={"auto"}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: "white",
          borderRadius: '24px',
        },
      }}
    >
      {
        gifts.map((gift, index) => (
          <Form key={gift.title} action={`/gifts/${index}/delete`} method="post">
            <Stack 
              direction="row"
              alignItems="center"
            >
              <Button type="submit" size="sm" colorScheme="red">
                <Icon as={CloseIcon}/>
              </Button>
              <ListItem>
                X{gift.quantity} - {gift.title}
              </ListItem>
            </Stack>
          </Form>
        ))
      }
    </List>
  );
};

export default GiftList;