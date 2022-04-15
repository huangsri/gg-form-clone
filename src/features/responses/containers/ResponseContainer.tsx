import { Box } from '@mui/material'
import { Fragment, useState } from 'react'

import {
  ConfirmDeleteDialog,
  EmptyResponse,
  LoadingResponse,
  ResponseTitle,
} from '../components'

import { useDeleteResponse, useResponses } from '../services'

import { TabContext, TabPanel } from '@mui/lab'
import { SummaryView } from './SummaryView'
import { IndividualView } from './IndividualView'

export const ResponseContainer = () => {
  const { data, isLoading, isFetching } = useResponses()

  const [currentTab, setCurrentTab] = useState('1')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  const { mutate: deleteResponse } = useDeleteResponse()

  return (
    <TabContext value={currentTab}>
      <Box sx={{ display: 'grid', gap: '12px' }}>
        <ResponseTitle
          count={data?.length ?? 0}
          currentIndex={currentIndex}
          currentTab={currentTab}
          handleChangeTab={handleChange}
          setCurrentIndex={setCurrentIndex}
          handleDelete={() => {
            setOpen(true)
          }}
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

      <ConfirmDeleteDialog
        open={open}
        setOpen={setOpen}
        onDelete={() => {
          const id = data?.[currentIndex].id

          if (id) {
            deleteResponse(
              {
                params: {
                  id,
                },
              },
              {
                onSuccess() {
                  setOpen(false)

                  if (currentIndex < data.length) {
                    setCurrentIndex((s) => Math.max(s - 1, 0))
                  }
                },
              }
            )
          }
        }}
      />
    </TabContext>
  )
}
