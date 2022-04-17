import { useState } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as _signOut,
  User,
} from 'firebase/auth'
import { useMutation } from 'react-query'

import { AuthContextProvider } from '../context'
import { LoginFormInput } from '../types'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [user, setUser] = useState<User | null>(null)

  const { mutate: signIn } = useMutation<void, void, LoginFormInput>(
    async (data) => {
      const auth = getAuth()

      const credential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      setUser(credential.user)
    }
  )

  const signOut = () => {
    const auth = getAuth()

    _signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch(() => {
        // An error happened.
      })
  }

  const contextValue = {
    user,
    signIn,
    signOut,
  }

  return (
    <AuthContextProvider value={contextValue}>{children}</AuthContextProvider>
  )
}
