import { createCtx } from '@/lib/utils'
import { User } from 'firebase/auth'
import { LoginFormInput } from './types'

type AuthContextValue = {
  user: User | null
  signIn: (data: LoginFormInput) => void
  signOut: () => void
}

export const [useAuthContext, AuthContextProvider] =
  createCtx<AuthContextValue>()
