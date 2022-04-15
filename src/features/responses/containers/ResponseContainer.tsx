import { Box } from '@mui/material'
import { Fragment, useState } from 'react'

import { EmptyResponse, LoadingResponse, ResponseTitle } from '../components'

import { useResponses } from '../services'

import { TabContext, TabPanel } from '@mui/lab'
import { SummaryView } from './SummaryView'
import { IndividualView } from './IndividualView'

export const ResponseContainer = () => {
  const { data, isLoading, isFetching } = useResponses()

  const [currentTab, setCurrentTab] = useState('1')
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <TabContext value={currentTab}>
      <Box sx={{ display: 'grid', gap: '12px' }}>
        <ResponseTitle
          count={data?.length ?? 0}
          handleChangeTab={handleChange}
          currentTab={currentTab}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
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
                <TabPanel value="3" sx={{ p: 0 }}>
                  <IndividualView currentIndex={currentIndex} />
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
