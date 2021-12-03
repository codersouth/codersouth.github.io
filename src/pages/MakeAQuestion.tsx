import React, { useCallback, VFC } from 'react'
import {
  Container,
  Text,
  Input,
  FormLabel,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { setQuestion } from '../data/firebase'
import type { Question } from '../data/firebase'

export const MakeAQuestion: VFC = () => {
  const { handleSubmit, register } = useForm<Question>()
  const onSubmit = useCallback(async (question: Question) => {
    await setQuestion(question)
  }, [])

  return (
    <Container maxH="container.lg">
      <Text>Pregunta algo!</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems="flex-start" spacing={4}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input {...register('name')} placeholder="Nombre" />
          <FormLabel htmlFor="question">Pregunta</FormLabel>
          <Input {...register('question')} placeholder="Pregunta" />
          <Button type="submit">Preguntar</Button>
        </VStack>
      </form>
    </Container>
  )
}
