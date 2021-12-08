import { useQuery } from 'react-query'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from './firebase'

enum UseUser {
  key = 'userHook',
}

export const useUser = () => {
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const {
    data: user,
    refetch,
    isLoading,
    isFetched,
  } = useQuery(
    UseUser.key,
    () => {
      return Promise.resolve(auth.currentUser)
    },
    {
      enabled: shouldUpdate,
    },
  )

  useEffect(() => {
    auth.onAuthStateChanged((user) => setShouldUpdate(!!user))
  }, [])

  return {
    user,
    isLoading,
    isFetched,
    refreshUser: refetch,
    signOut: () => {
      signOut(auth).then(() => refetch())
    },
  }
}
