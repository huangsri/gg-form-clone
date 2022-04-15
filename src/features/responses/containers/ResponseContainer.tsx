import { LeavePeriod, LeaveType } from '@/features/forms/types'
import { Box } from '@mui/material'
import { Fragment, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

import {
  EmptyResponse,
  LoadingResponse,
  PieChartResponseProps,
  ResponseTitle,
} from '../components'

import { useResponses } from '../services'

import { PIE_COLORS } from '../constants'

const DynamicPieChartResponse = dynamic<PieChartResponseProps>(
  () => import('../components').then((mod) => mod.PieChartResponse),
  {
    ssr: false,
  }
)

export const ResponseContainer = () => {
  const { data, isLoading, isFetching } = useResponses()

  const [currentTab, setCurrentTable] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTable(newValue)
  }

  const { leavePeriods, leaveTypes } = useMemo(() => {
    const _leaveType: Record<LeaveType, number> = {
      Sick: 0,
      Vacation: 0,
      Business: 0,
      Other: 0,
    }

    const _leavePeriod: Record<LeavePeriod, number> = {
      'Full Day': 0,
      'First Half': 0,
      'Second Half': 0,
    }

    data?.forEach(({ leavePeriod, leaveType }) => {
      _leaveType[leaveType] += 1
      _leavePeriod[leavePeriod] += 1
    })

    return {
      leaveTypes: Object.keys(_leaveType).map((k, idx) => ({
        id: k,
        value: _leaveType[k],
        color: PIE_COLORS[idx],
      })),
      leavePeriods: Object.keys(_leavePeriod).map((k, idx) => ({
        id: k,
        value: _leavePeriod[k],
        color: PIE_COLORS[idx],
      })),
    }
  }, [data])

  return (
    <Box sx={{ display: 'grid', gap: '12px' }}>
      <ResponseTitle
        count={data?.length ?? 0}
        currentTab={currentTab}
        handleChangeTab={handleChange}
      />
      {isLoading || isFetching ? (
        <LoadingResponse />
      ) : (
        <Fragment>
          {data?.length ? (
            <Fragment>
              <DynamicPieChartResponse
                title="Leave Period"
                count={data.length}
                data={leavePeriods}
              />
              <DynamicPieChartResponse
                title="Leave Type"
                count={data.length}
                data={leaveTypes}
              />
            </Fragment>
          ) : (
            <EmptyResponse />
          )}
        </Fragment>
      )}
    </Box>
  )
}
