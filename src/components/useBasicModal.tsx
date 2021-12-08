import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

type UseBasicModalProps = {
  readonly body: JSX.Element
  readonly header: JSX.Element
  readonly name: string
}

export const useBasicModal = ({
  body,
  header,
  name,
}: UseBasicModalProps): readonly [() => void, JSX.Element] => {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return [
    onToggle,
    <Modal isOpen={isOpen} key={name} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="900">{header}</ModalHeader>
        <ModalBody>
          <Box padding="0.2rem 0 2rem">{body}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>,
  ]
}
