import { User } from 'firebase/auth'
import { UseMutateFunction } from 'react-query'

import { createCtx } from '@/lib/utils'
import { LoginFormInput } from './types'

type AuthContextValue = {
  user: User | null
  signIn: UseMutateFunction<void, void, LoginFormInput, unknown>
  signOut: () => void
}

export const [useAuthContext, AuthContextProvider] =
  createCtx<AuthContextValue>()
