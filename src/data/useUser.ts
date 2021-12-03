import { useQuery } from 'react-query'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth()

enum UseUser {
  key = 'userHook',
}

export const useUser = () => {
  const { data: user, refetch } = useQuery(
    UseUser.key,
    () => {
      return Promise.resolve(auth.currentUser)
    },
    {
      enabled: !!auth.currentUser,
    },
  )

  return {
    user,
    refreshUser: refetch,
    signOut: () => {
      signOut(auth).then(() => refetch())
    },
  }
}
