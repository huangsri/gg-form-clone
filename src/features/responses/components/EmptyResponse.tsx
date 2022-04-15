import { Box } from '@mui/material'

export const EmptyResponse = () => {
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
      <Box sx={{ color: '#70757a', fontSize: '12px' }}>
        Waiting for responses
      </Box>
    </Box>
  )
}
