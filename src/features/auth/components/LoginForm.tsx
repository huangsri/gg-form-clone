import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import { Card } from '@/components/shared'
import { LoginFormInput } from '../types'

type LoginFormProps = {
  onSubmitForm: (data: LoginFormInput) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmitForm } = props

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
      </Box>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
          onSubmitForm(data)
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
