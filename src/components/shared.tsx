import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Card = styled(Box)(() => ({
  border: '1px solid #dadce0',
  borderRadius: '8px',
  backgroundColor: 'white',
}))

export const Grid = styled(Box)(() => ({
  display: 'grid',
  gap: '12px',
}))
