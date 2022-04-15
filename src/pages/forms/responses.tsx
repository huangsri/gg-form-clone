import { NextPage } from 'next'
import { Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

import { ResponseContainer } from '@/features/responses/containers'

const FormResponsePage: NextPage = () => {
  return (
    <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
      <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '12px' }}>
        <ResponseContainer />
      </Box>
    </Box>
  )
}

export default FormResponsePage
