import { Box, CircularProgress } from '@mui/material'
import { Fragment } from 'react'

import { useAuthContext } from '../context'
import { LoginForm } from './LoginForm'

type ProtectedPageProps = {
  children: React.ReactNode
}

export const ProtectedPage = (props: ProtectedPageProps) => {
  const { children } = props

  const { user, ready } = useAuthContext()

  if (!ready)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <CircularProgress size={48} />
      </Box>
    )

  if (!user) return <LoginForm />

  return <Fragment>{children}</Fragment>
}
