import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { UserSignUp } from './types'
import { auth } from './firebase'

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
