import { Box, Input, TextField } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

type FormTitleProps = {
  title: string
}

export const FormTitle = (props: FormTitleProps) => {
  const { title } = props

  return (
    <Box
      sx={{
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white',
        border: '1px solid #dadce0',

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
      <Box
        sx={{
          pt: '22px',
          px: '24px',
          pb: '16px',
          borderBottom: '1px solid #dadce0',
        }}
      >
        <Box sx={{ fontSize: '32px' }}>{title}</Box>
        <Box sx={{ mt: '12px' }}>Description</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '12px 24px 16px',
        }}
      >
        <Box sx={{ fontSize: '14px' }}>huang@datawow.io</Box>
        <Box sx={{ fontSize: '12px', color: '#5f6368' }}>Draft saved</Box>
      </Box>
    </Box>
  )
}
