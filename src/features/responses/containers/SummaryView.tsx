import { Box } from '@mui/material'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import {
  BarChartResponseProps,
  DateResponse,
  PieChartResponseProps,
} from '../components'

import { useResponsesData } from '../services'

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

export const SummaryView = () => {
  const data = useResponsesData()

  const { leavePeriods, leaveTypes, names, when, useNormalList } =
    useMemo(() => {
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
      const _when: Record<string, number> = {}

      data?.forEach(({ leavePeriod, leaveType, name, when }) => {
        _leaveType[leaveType] += 1
        _leavePeriod[leavePeriod] += 1

        _name[name] = _name[name] ? (_name[name] += 1) : 1
        _when[when] = _when[when] ? (_when[when] += 1) : 1
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
        when: Object.keys(_when).map((k) => ({
          date: k,
          count: _when[k],
        })),
        useNormalList: numberOfUniqueName === data?.length ?? false,
      }
    }, [data])

  if (!data) return null

  const count = data.length

  return (
    <Box sx={{ display: 'grid', gap: '12px' }}>
      <DynamicBarChartResponse
        title="Name"
        count={count}
        data={names}
        useNormalList={useNormalList}
      />
      <DynamicPieChartResponse
        title="Leave Period"
        count={count}
        data={leavePeriods}
      />
      <DynamicPieChartResponse
        title="Leave Type"
        count={count}
        data={leaveTypes}
      />
      <DateResponse count={count} data={when} />
    </Box>
  )
}
