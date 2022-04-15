import { Box, useMediaQuery } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { useMemo } from 'react'

import { ResponseItemWrapper } from './ResponseItem'

export type BarChartResponseProps = {
  title: string
  count: number
  data: { id: string; value: number }[]
  useNormalList: boolean
}

export const BarChartResponse = (props: BarChartResponseProps) => {
  const { title, count, data, useNormalList } = props

  const matches = useMediaQuery('(min-width:600px)')

  const total = useMemo(() => {
    return data.reduce((sum, cur) => sum + cur.value, 0)
  }, [data])

  return (
    <ResponseItemWrapper title={title} count={count}>
      {useNormalList ? (
        <ResponseList data={data} />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '240px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <ResponsiveBar
              data={data}
              indexBy="id"
              colors={() => '#673ab7'}
              labelTextColor="white"
              label={({ value }) => {
                console.log(value, data.length)
                const percent = (((value ?? 0) / total) * 100).toFixed(1)

                return `${value} (${percent}%)`
              }}
              margin={{
                top: 30,
                bottom: 20,
                right: 20,
                left: matches ? 60 : 20,
              }}
              axisBottom={{
                tickSize: 0,
                legendPosition: 'middle',
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                legendPosition: 'middle',
              }}
              tooltip={({ value, indexValue }) => {
                return (
                  <Box
                    sx={{
                      fontSize: '12px',
                      padding: '6px 8px',
                      bgcolor: 'white',
                    }}
                  >
                    <Box sx={{ fontWeight: 600 }}>{indexValue}</Box>
                    <Box>Count: {value}</Box>
                  </Box>
                )
              }}
            />
          </Box>
        </Box>
      )}
    </ResponseItemWrapper>
  )
}

type ResponseListProps = {
  data: { id: string; value: number }[]
}

const ResponseList = (props: ResponseListProps) => {
  const { data } = props

  return (
    <Box sx={{ display: 'grid', gap: '4px', pr: '12px' }}>
      {data.map((datum, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              bgcolor: '#f8f9fa',
              fontSize: '14px',
              p: '10px',
              borderRadius: '4px',
            }}
          >
            {datum.id}
          </Box>
        )
      })}
    </Box>
  )
}
