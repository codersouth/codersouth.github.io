import React, { VFC } from 'react'
import { QuestionIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons'
import {
  HStack,
  Button,
  Box,
  Image,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useUser } from '../data/useUser'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import Logo from '../assets/logo.svg'
import { useBasicModal } from './useBasicModal'

export const Menu: VFC = () => {
  const { user, signOut } = useUser()

  const [onToggleSignUp, signUpModal] = useBasicModal({
    body: <SignUp exitSignUp={() => onToggleSignUp()} />,
    header: <Heading>Registrarse</Heading>,
    name: 'sinUp',
  })

  const [onToggleLogin, loginModal] = useBasicModal({
    body: <Login exitLogin={() => onToggleLogin()} />,
    header: <Heading>Login</Heading>,
    name: 'login',
  })

  return (
    <Box background="teal.50" boxShadow="xl" padding={6} width="full">
      {signUpModal}
      {loginModal}
      <HStack spacing={6}>
        <Button as={Link} to="/" variant="ghost">
          <Image src={Logo} width="15rem" />
        </Button>
        {!user ? (
          <>
            <Button onClick={onToggleSignUp}>Registrarse</Button>
            <Button onClick={onToggleLogin} variant="ghost">
              Login
            </Button>
          </>
        ) : (
          <>
            <IconButton
              aria-label="link"
              as={Link}
              icon={<QuestionIcon />}
              to="/make-a-question"
              variant="ghost"
            />
            <IconButton
              aria-label="link"
              as={Link}
              icon={<Search2Icon />}
              to="/questions"
              variant="ghost"
            />

            <IconButton
              aria-label="button"
              icon={<CloseIcon />}
              onClick={signOut}
              variant="ghost"
            />
          </>
        )}
      </HStack>
    </Box>
  )
}
