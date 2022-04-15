import { Box, CircularProgress } from '@mui/material'

export const LoadingResponse = () => {
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
        <Box>Loading responses...</Box>
      </Box>
    </Box>
  )
}
