import React, { useCallback, VFC } from 'react'
import {
  VStack,
  HStack,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { UserSignUp } from '../data/types'
import { useLogin } from '../data/useLogin'
import { useUser } from '../data/useUser'

type LoginProps = {
  readonly exitLogin: () => void
}

export const Login: VFC<LoginProps> = ({ exitLogin }) => {
  const { refreshUser } = useUser()
  const { login } = useLogin()
  const { handleSubmit, register } = useForm<UserSignUp>()

  const onSubmit = useCallback(
    ({ email, password }: UserSignUp) => {
      login({ email, password })
        .then(async () => {
          await refreshUser()
          exitLogin()
        })
        .catch(async () => {
          await refreshUser()
        })
    },
    [exitLogin, login, refreshUser],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={6} width="full">
        <FormControl id="email" isRequired>
          <FormLabel>Dirección de e-mail</FormLabel>
          <Input {...register('email')} placeholder="E-mail" type="email" />
          <FormHelperText>No vamos a compartir tu email.</FormHelperText>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Clave</FormLabel>
          <Input
            {...register('password')}
            placeholder="Clave"
            type="password"
          />
          <FormHelperText>Usa una clave segura.</FormHelperText>
        </FormControl>

        <HStack spacing={5}>
          <Button type="submit">Login</Button>
          <Button onClick={exitLogin} variant="ghost">
            Cancelar
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}
