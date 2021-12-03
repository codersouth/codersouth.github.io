import React, { useEffect, useState, VFC } from 'react'
import { Container, Text, HStack } from '@chakra-ui/react'
import { onQuestion } from '../data/firebase'
import type { QuestionWithId } from '../data/firebase'

export const Questions: VFC = () => {
  const [questions, setQuestions] = useState<readonly QuestionWithId[]>([])

  useEffect(() => {
    onQuestion((dbQuestions) => setQuestions(dbQuestions))
  }, [])

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
