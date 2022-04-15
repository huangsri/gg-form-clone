import { Box } from '@mui/material'
import { Fragment, useState } from 'react'

import { EmptyResponse, LoadingResponse, ResponseTitle } from '../components'

import { useResponses } from '../services'

import { TabContext, TabPanel } from '@mui/lab'
import { SummaryView } from './SummaryView'

export const ResponseContainer = () => {
  const { data, isLoading, isFetching } = useResponses()

  const [currentTab, setCurrentTab] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <TabContext value={currentTab}>
      <Box sx={{ display: 'grid', gap: '12px' }}>
        <ResponseTitle
          count={data?.length ?? 0}
          handleChangeTab={handleChange}
        />
        {isLoading || isFetching ? (
          <LoadingResponse />
        ) : (
          <Fragment>
            {data?.length ? (
              <Fragment>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <SummaryView />
                </TabPanel>
              </Fragment>
            ) : (
              <EmptyResponse />
            )}
          </Fragment>
        )}
      </Box>
    </TabContext>
  )
}
