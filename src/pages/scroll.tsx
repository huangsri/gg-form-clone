import { Box } from '@mui/material'
import { NextPage } from 'next'
import { deepPurple } from '@mui/material/colors'

import { ScrollContainer } from '@/features/scroll/containers'
import { Fragment } from 'react'
import Head from 'next/head'

const ScrollPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Infinite Scroll</title>
      </Head>

      <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '12px' }}>
          <ScrollContainer />
        </Box>
      </Box>
    </Fragment>
  )
}

export default ScrollPage
