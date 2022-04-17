import { Box, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { Card } from '@/components/shared'
import { LoginFormInput } from '../types'

import { useAuthContext } from '../context'
import { LoadingButton } from '@mui/lab'

export const LoginForm = () => {
  const { signIn } = useAuthContext()

  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
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
          <Box sx={{ mt: '24px', color: 'red', fontSize: '14px' }}>
            Invalid Credentials
          </Box>
        )}
      </Box>

      <form
        onSubmit={handleSubmit((data) => {
          setLoading(true)
          signIn(data, {
            onError() {
              setError(true)
            },
            onSettled() {
              setLoading(false)
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
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Sign in
          </LoadingButton>
        </Box>
      </form>
    </Card>
  )
}
