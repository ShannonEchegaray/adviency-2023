import { List, ListItem } from "@chakra-ui/react";
import React from "react";

interface GiftListProps {
  gifts: string[];
}

const GiftList: React.FC<GiftListProps> = ({ gifts }) => {
  return (
    <List>
      {
        gifts.map((gift) => (
          <ListItem key={gift}>
            {gift}
          </ListItem>
        ))
      }
    </List>
  );
};

export default GiftList;