import { get, onValue, ref, set, DataSnapshot } from 'firebase/database'
import { User } from 'firebase/auth'
import { useCallback } from 'react'
import { db } from './firebase'

enum UserRoles {
  ADMIN = 'ADMIN',
  DEFAULT = 'DEFAULT',
}

enum UserRolesConfig {
  path = 'userRoles/',
}

export const useSetUserRole = () => {
  const setUserRole = useCallback((user: User) => {
    return set(ref(db, `${UserRolesConfig.path}${user.uid}`), {
      email: user.email,
      role: UserRoles.DEFAULT,
    })
  }, [])

  return {
    setUserRole,
  }
}
