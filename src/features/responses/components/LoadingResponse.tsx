import { Box, CircularProgress } from '@mui/material'

type LoadingResponseProps = {
  text?: string
}

export const LoadingResponse = (props: LoadingResponseProps) => {
  const { text = 'Loading responses...' } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        bgcolor: 'white',
        p: '24px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          color: '#202124',
          fontSize: '14px',
          gridTemplateColumns: '32px max-content',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <CircularProgress size="32" thickness={5} />
        <Box>{text}</Box>
      </Box>
    </Box>
  )
}
