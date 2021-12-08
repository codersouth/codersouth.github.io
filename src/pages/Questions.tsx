import React, { useCallback, useMemo, useState, VFC } from 'react'
import {
  Text,
  Textarea,
  Heading,
  Button,
  VStack,
  HStack,
  Flex,
  Avatar,
  Box,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Question, useQuestions } from '../data/useQuestions'
import { useUser } from '../data/useUser'

const Questions: VFC = () => {
  const { user } = useUser()
  const [filter, setFilter] = useState<string | null | undefined>()
  const { questions } = useQuestions()
  const filteredQuestions = useMemo(
    () => (filter ? questions.filter((q) => q.user === filter) : questions),
    [filter, questions],
  )

  const { handleSubmit, register } = useForm<Question>()
  const { makeQuestion } = useQuestions()
  const onSubmit = useCallback(
    async ({ question }: Question) => {
      await makeQuestion({
        question,
        user: user?.email,
        date: Date.now(),
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
      <Heading>Preguntas</Heading>
      <Text>Hacer una pregunta:</Text>
      <VStack
        alignItems="flex-start"
        background="grey.300"
        borderRadius="2xl"
        boxShadow="2xl"
        padding="2rem 1.5rem"
        width="full"
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Textarea
            {...register('question')}
            background="teal.100"
            marginBottom={6}
            placeholder="Pregunta"
            resize="none"
            w="full"
          />
          <Button type="submit">Preguntar</Button>
        </form>
      </VStack>

      <Text>
        {!filter
          ? 'Mostrando todas las preguntas'
          : 'Mostrando solo mis preguntas'}
      </Text>
      <HStack>
        <Button onClick={() => setFilter(undefined)}>
          Ver todas las preguntas
        </Button>
        <Button onClick={() => setFilter(user?.email)} variant="ghost">
          Ver mis preguntas
        </Button>
      </HStack>

      {filteredQuestions.length === 0 && filter && (
        <Text color="red.400" fontWeight="extrabold">
          Todavia no preguntaste nada
        </Text>
      )}

      {filteredQuestions.map(({ user, id, question }) => (
        <Flex
          bg="white"
          borderRadius="2xl"
          boxShadow="lg"
          key={id}
          padding="1rem 1.2rem"
          width="full"
        >
          <Avatar name={user ?? undefined} />
          <Box ml="3">
            <Text fontWeight="bold">{user}</Text>
            <Text fontSize="sm">{question}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  )
}

export default Questions
