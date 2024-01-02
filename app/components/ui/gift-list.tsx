import { Button, Icon, List, ListItem, Stack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Form } from "@remix-run/react";
import React from "react";

interface GiftListProps {
  gifts: string[];
}

const GiftList: React.FC<GiftListProps> = ({ gifts }) => {
  return (
    <List spacing={1}>
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