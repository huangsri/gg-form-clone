import Head from 'next/head'
import { Box } from '@mui/material'
import { Fragment } from 'react'
import { NextPage } from 'next'
import { deepPurple } from '@mui/material/colors'

import { ResponseContainer } from '@/features/responses/containers'

const FormResponsePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Responses</title>
      </Head>

      <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '12px' }}>
          <ResponseContainer />
        </Box>
      </Box>
    </Fragment>
  )
}

export default FormResponsePage
