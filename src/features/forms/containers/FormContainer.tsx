import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Form, FormSuccess, FormTitle } from '../components'

import { FormInput } from '../types'

const formTitle = 'Leave Form'

export const FormContainer = () => {
  const [finished, setFinished] = useState(false)

  return (
    <Box>
      <button onClick={() => setFinished(true)}>Success</button>
      {finished ? (
        <FormSuccess
          title={formTitle}
          handleReSubmit={() => setFinished(false)}
        />
      ) : (
        <Box sx={{ display: 'grid', gap: '12px' }}>
          <FormTitle title={formTitle} />

          <Form />
        </Box>
      )}
    </Box>
  )
}
