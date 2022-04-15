import { Box, Link } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

type FormSuccessProps = {
  title: string
  handleReSubmit: () => void
}

export const FormSuccess = (props: FormSuccessProps) => {
  const { title, handleReSubmit } = props

  return (
    <Box
      sx={{
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white',
        border: '1px solid #dadce0',
        padding: '36px 24px 24px',
        fontSize: '14px',

        '::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          height: '10px',
          width: '100%',
          bgcolor: deepPurple[400],
        },
      }}
    >
      <Box sx={{ fontSize: '32px' }}>{title}</Box>
      <Box sx={{ mt: '16px' }}>Your response has been recorded.</Box>
      <Box sx={{ mt: '25px' }}>
        <Link sx={{ cursor: 'pointer' }} onClick={() => handleReSubmit()}>
          Submit another response
        </Link>
      </Box>
    </Box>
  )
}
