import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useCallback } from 'react'
import { UserSignUp } from './types'

const auth = getAuth()

export const useSignUp = () => {
  const signUp = useCallback(
    ({ email, password }: UserSignUp) =>
      createUserWithEmailAndPassword(auth, email, password),
    [],
  )

  return {
    signUp,
  }
}
