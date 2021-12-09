import React, { VFC } from 'react'
import { GiPlatform } from 'react-icons/gi'
import { BiLogInCircle } from 'react-icons/bi'
import { RiQuestionAnswerFill } from 'react-icons/ri'
import { FaTheaterMasks } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import {
  VStack,
  Button,
  Box,
  Link as ChakraLink,
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useUser } from '../data/useUser'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import { CodersouthLogo, CodersouthIsoLogo } from '../icons'
import { useBasicModal } from './useBasicModal'

const isActualPath = (pathname: Location['pathname']) => (path: string) =>
  !!pathname.match(path)

export const Menu: VFC = () => {
  const colorLogo = useColorModeValue('cyan.800', 'cyan.400')
  const isSmall = useBreakpointValue({ base: true, lg: false })
  const { pathname } = useLocation()
  const matchActualPath = isActualPath(pathname)
  const { user } = useUser()

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
    <Box position="sticky" top={0} width="full">
      {!user && [signUpModal, loginModal]}

      <VStack alignItems="stretch" spacing={4}>
        <ChakraLink as={Link} padding="0.2rem 0.2rem 1.2rem" to="/">
          {isSmall ? (
            <CodersouthIsoLogo color={colorLogo} height="3rem" width="full" />
          ) : (
            <CodersouthLogo color={colorLogo} height="full" width="full" />
          )}
        </ChakraLink>
        {!user ? (
          <>
            <Button
              justifyContent="flex-start"
              leftIcon={<GiPlatform />}
              onClick={onToggleSignUp}
              variant="menu"
            >
              {!isSmall && 'Registrarse'}
            </Button>
            <Button
              justifyContent="flex-start"
              leftIcon={<BiLogInCircle />}
              onClick={onToggleLogin}
              variant="menu"
            >
              {!isSmall && 'Login'}
            </Button>
          </>
        ) : (
          <>
            <Button
              as={Link}
              isActive={matchActualPath('profile')}
              justifyContent="flex-start"
              leftIcon={<CgProfile />}
              to="/profile"
              variant="menu"
            >
              {!isSmall && 'Perfil'}
            </Button>
            <Button
              as={Link}
              isActive={matchActualPath('questions')}
              justifyContent="flex-start"
              leftIcon={<RiQuestionAnswerFill />}
              to="/questions"
              variant="menu"
            >
              {!isSmall && 'Preguntas'}
            </Button>
            <Button
              as={Link}
              isActive={matchActualPath('members')}
              justifyContent="flex-start"
              leftIcon={<IoIosPeople />}
              to="/members"
              variant="menu"
            >
              {!isSmall && 'Miembros'}
            </Button>
            <Button
              as={Link}
              isActive={matchActualPath('talks')}
              justifyContent="flex-start"
              leftIcon={<FaTheaterMasks />}
              to="/talks"
              variant="menu"
            >
              {!isSmall && 'Eventos'}
            </Button>
          </>
        )}
      </VStack>
    </Box>
  )
}
