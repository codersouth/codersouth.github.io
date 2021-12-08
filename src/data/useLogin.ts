import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { UserSignUp } from './types'
import { auth } from './firebase'

export const useLogin = () => {
  const login = useCallback(({ email, password }: UserSignUp) => {
    return signInWithEmailAndPassword(auth, email, password)
  }, [])

  return { login }
}
