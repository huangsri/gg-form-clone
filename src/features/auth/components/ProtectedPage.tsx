import { Fragment } from 'react'

import { useAuthContext } from '../context'
import { LoginForm } from './LoginForm'

type ProtectedPageProps = {
  children: React.ReactNode
}

export const ProtectedPage = (props: ProtectedPageProps) => {
  const { children } = props

  const { user } = useAuthContext()

  if (!user) return <LoginForm />

  return <Fragment>{children}</Fragment>
}
