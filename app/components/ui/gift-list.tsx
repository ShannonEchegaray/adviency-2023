import { Box, Button, Icon, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Form } from "@remix-run/react";
import React from "react";

interface GiftListProps {
  gifts: string[];
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
    >
      {
        gifts.map((gift, index) => (
          <Form key={gift} action={`/gifts/${index}/delete`} method="post">
            <Stack 
              direction="row"
              alignItems="center"
            >
              <Button type="submit" size="sm" colorScheme="red">
                <Icon as={CloseIcon}/>
              </Button>
              <ListItem>
                {gift}
              </ListItem>
            </Stack>
          </Form>
        ))
      }
    </List>
  );
};

export default GiftList;