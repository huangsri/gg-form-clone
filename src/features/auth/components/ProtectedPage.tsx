import { Fragment } from 'react'

import { useAuthContext } from '../context'
import { LoginForm } from './LoginForm'

type ProtectedPageProps = {
  children: React.ReactNode
}

export const ProtectedPage = (props: ProtectedPageProps) => {
  const { children } = props

  const { user, signIn } = useAuthContext()

  if (!user)
    return (
      <LoginForm
        onSubmitForm={(data) => {
          signIn(data)
        }}
      />
    )

  return <Fragment>{children}</Fragment>
}
