import { useState } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as _signOut,
  User,
} from 'firebase/auth'

import { AuthContextProvider } from '../context'
import { LoginFormInput } from '../types'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth()

  const signIn = (data: LoginFormInput) => {
    signInWithEmailAndPassword(auth, data.email, data.password).then(
      (credential) => {
        setUser(credential.user)
      }
    )
  }

  const signOut = () => {
    const auth = getAuth()
    _signOut(auth)
      .then(() => {
        setUser(null)
        // Sign-out successful.
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