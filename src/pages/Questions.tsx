import React, { VFC } from 'react'
import { Container, Text, HStack } from '@chakra-ui/react'
import { useQuestions } from '../data/useQuestions'

export const Questions: VFC = () => {
  const { questions } = useQuestions()

  return (
    <Container maxH="container.lg">
      {questions.map(({ name, id, question }) => (
        <HStack key={id}>
          <Text>{name}</Text>
          <Text fontWeight="bold">{question}</Text>
        </HStack>
      ))}
    </Container>
  )
}
