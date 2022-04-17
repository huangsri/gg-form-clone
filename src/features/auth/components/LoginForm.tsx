import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { Card } from '@/components/shared'
import { LoginFormInput } from '../types'

import { useAuthContext } from '../context'

export const LoginForm = () => {
  const { signIn } = useAuthContext()

  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm<LoginFormInput>()

  return (
    <Card
      sx={(theme) => ({
        padding: '24px 20px',
        maxWidth: '400px',
        mx: 'auto',
        mt: '40px',
        border: 'none',
        [theme.breakpoints.up('sm')]: {
          padding: '48px 40px',
          border: '1px solid #dadce0',
          mt: '120px',
        },
      })}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ fontSize: '24px' }}>Sign in</Box>
        <Box sx={{ mt: '8px' }}>to continue to GG Form</Box>

        {error && (
          <Box sx={{ mt: '24px', color: 'red' }}>Invalid Credentials</Box>
        )}
      </Box>

      <form
        onSubmit={handleSubmit((data) => {
          signIn(data, {
            onError() {
              setError(true)
            },
          })
        })}
      >
        <Box sx={{ display: 'grid', gap: '12px', mt: '32px' }}>
          <TextField
            type="email"
            placeholder="Email"
            autoFocus
            {...register('email')}
          />
          <TextField
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '32px' }}>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Box>
      </form>
    </Card>
  )
}
