import React, { useCallback, VFC } from 'react'
import { Text, Textarea, Heading, Button, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Question, useQuestions } from '../data/useQuestions'
import { useUser } from '../data/useUser'

export const MakeAQuestion: VFC = () => {
  const { user } = useUser()
  const { handleSubmit, register } = useForm<Question>()
  const { makeQuestion } = useQuestions()
  const onSubmit = useCallback(
    async ({ question }: Question) => {
      await makeQuestion({
        question,
        user: user?.email,
      })
    },
    [makeQuestion, user],
  )

  return (
    <VStack
      alignItems="flex-start"
      justifyContent="stretch"
      spacing={8}
      width="full"
    >
      <Heading>Hacer una pregunta</Heading>
      <Text>Dejanos aqui tus preguntas ({user?.email}):</Text>
      <VStack
        alignItems="flex-start"
        background="teal.50"
        borderRadius="2xl"
        padding="2rem 1.5rem"
        width="full"
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Textarea
            {...register('question')}
            background="white"
            marginBottom={6}
            placeholder="Pregunta"
            resize="none"
            w="full"
          />
          <Button type="submit">Preguntar</Button>
        </form>
      </VStack>
    </VStack>
  )
}
