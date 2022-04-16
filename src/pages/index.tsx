import Head from 'next/head'
import { Box } from '@mui/material'
import { Fragment } from 'react'
import { NextPage } from 'next'
import { deepPurple } from '@mui/material/colors'

import { FormContainer } from '@/features/forms/containers'

const FormPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Leave Form</title>
      </Head>

      <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '12px' }}>
          <FormContainer />
        </Box>
      </Box>
    </Fragment>
  )
}

export default FormPage
