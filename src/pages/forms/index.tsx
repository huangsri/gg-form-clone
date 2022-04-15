import { NextPage } from 'next'
import { Box } from '@mui/material'

import { FormContainer } from '@/features/forms/containers'
import { deepPurple } from '@mui/material/colors'

const FormPage: NextPage = () => {
  return (
    <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
      <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '12px' }}>
        <FormContainer />
      </Box>
    </Box>
  )
}

export default FormPage
