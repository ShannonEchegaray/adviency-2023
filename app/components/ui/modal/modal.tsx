import { ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Modal as ChakraModal } from "@chakra-ui/react";
import React from "react";
import type { ReactChildren } from "~/types/utils/react";

interface ModalProps {
  title?: ReactChildren
  content: ReactChildren
  footer?: ReactChildren
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  footer,
  isOpen,
  onClose
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          background={"radial-gradient(circle, rgba(30,96,25,1) 0%, rgba(9,79,32,1) 100%)"}
        >
          { title !== undefined && <ModalHeader><Text as="h2">{title}</Text></ModalHeader> }
          { title !== undefined && <ModalCloseButton /> }
          <ModalBody>
            {content}
          </ModalBody>
          { footer !== undefined && (
            <ModalFooter>
              {footer}
            </ModalFooter>
          )}
        </ModalContent>
      </ChakraModal>
  );
};

export default Modal;