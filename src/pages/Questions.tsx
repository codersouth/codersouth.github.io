import React, { useMemo, useState, VFC } from 'react'
import {
  Button,
  Text,
  VStack,
  HStack,
  Heading,
  Flex,
  Avatar,
  Box,
} from '@chakra-ui/react'
import { useQuestions } from '../data/useQuestions'
import { useUser } from '../data/useUser'

export const Questions: VFC = () => {
  const [filter, setFilter] = useState<string | null | undefined>()
  const { questions } = useQuestions()
  const { user } = useUser()
  const filteredQuestions = useMemo(
    () => (filter ? questions.filter((q) => q.user === filter) : questions),
    [filter, questions],
  )

  return (
    <VStack alignItems="flex-start" spacing={6}>
      <Heading>Preguntas</Heading>
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
          bg="teal.50"
          borderRadius="2xl"
          boxShadow="lg"
          key={id}
          padding="1rem 1.2rem"
          width="full"
        >
          <Avatar name={user} />
          <Box ml="3">
            <Text fontWeight="bold">{user}</Text>
            <Text fontSize="sm">{question}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  )
}
