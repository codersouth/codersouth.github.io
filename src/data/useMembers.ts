import { useQuery } from 'react-query'
import { User } from 'firebase/auth'
import { functions } from './config'

enum UseMembers {
  key = 'members',
  path = '/members',
}

export const useMembers = () => {
  const { data: members = [], isLoading: isLoadingMembers } = useQuery<
    readonly User[]
  >(
    UseMembers.key,
    () =>
      fetch(`${functions}${UseMembers.path}`)
        .then((r) => r.json())
        .then(
          (result) =>
            (result as unknown as { readonly users: readonly User[] }).users,
        ),
    {
      refetchOnWindowFocus: false,
    },
  )

  return {
    isLoadingMembers,
    members,
  }
}
