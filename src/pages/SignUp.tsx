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
import { useSignUp } from '../data/useSignUp'
import { UserSignUpWithRepeatPass } from '../data/types'
import { useUser } from '../data/useUser'

type SignUpProps = {
  readonly exitSignUp: () => void
}

export const SignUp: VFC<SignUpProps> = ({ exitSignUp }) => {
  const { refreshUser } = useUser()
  const { signUp } = useSignUp()
  const { handleSubmit, register } = useForm<UserSignUpWithRepeatPass>()

  const onSubmit = useCallback(
    ({ email, password, repeatedPassword }: UserSignUpWithRepeatPass) => {
      if (password === repeatedPassword) {
        signUp({ email, password })
          .then(async () => {
            await refreshUser()
            exitSignUp()
          })
          .catch(async () => {
            await refreshUser()
          })
      }
    },
    [exitSignUp, refreshUser, signUp],
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
        <FormControl id="repeatPassword" isRequired>
          <FormLabel>Repetir clave</FormLabel>
          <Input
            {...register('repeatedPassword')}
            placeholder="Repetir clave"
            type="password"
          />
          <FormHelperText>Debe ser la misma.</FormHelperText>
        </FormControl>

        <HStack spacing={5}>
          <Button type="submit">Registrarse</Button>
          <Button onClick={exitSignUp} variant="ghost">
            Cancelar
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}
