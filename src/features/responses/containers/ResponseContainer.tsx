import { Box } from '@mui/material'
import { Fragment, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

import {
  BarChartResponseProps,
  EmptyResponse,
  LoadingResponse,
  PieChartResponseProps,
  ResponseTitle,
} from '../components'

import { useResponses } from '../services'

import { LeavePeriod, LeaveType } from '@/features/forms/types'
import { PIE_COLORS } from '../constants'

const DynamicPieChartResponse = dynamic<PieChartResponseProps>(
  () => import('../components').then((mod) => mod.PieChartResponse),
  {
    ssr: false,
  }
)
const DynamicBarChartResponse = dynamic<BarChartResponseProps>(
  () => import('../components').then((mod) => mod.BarChartResponse),
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

  const { leavePeriods, leaveTypes, names, useNormalList } = useMemo(() => {
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

    const _name: Record<string, number> = {}

    data?.forEach(({ leavePeriod, leaveType, name }) => {
      _leaveType[leaveType] += 1
      _leavePeriod[leavePeriod] += 1

      _name[name] = _name[name] ? (_name[name] += 1) : 1
    })

    const numberOfUniqueName = Object.keys(_name).length

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
      names: Object.keys(_name).map((k) => ({
        id: k,
        value: _name[k],
      })),
      useNormalList: numberOfUniqueName === data?.length ?? false,
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
              <DynamicBarChartResponse
                title="Name"
                count={data.length}
                data={names}
                useNormalList={useNormalList}
              />
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
