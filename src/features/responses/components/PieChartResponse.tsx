import { Box, useMediaQuery } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import { useMemo } from 'react'

import { ResponseItemWrapper } from './ResponseItem'

export const PieChartResponse = (props: PieChartResponseProps) => {
  const { title, count, data } = props

  const matches = useMediaQuery('(min-width:600px)')

  const total = useMemo(() => {
    return data.reduce((sum, cur) => sum + cur.value, 0)
  }, [data])

  return (
    <ResponseItemWrapper title={title} count={count}>
      <Box
        sx={{
          width: '100%',
          height: '200px',
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
          <ResponsivePie
            arcLabelsRadiusOffset={0.7}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="white"
            colors={({ data }) => data.color}
            data={data}
            enableArcLinkLabels={false}
            endAngle={-270}
            startAngle={90}
            margin={{
              top: 10,
              bottom: 10,
              right: matches ? 180 : 140,
            }}
            tooltip={({ datum }) => {
              const percent = (datum.value / total) * 100

              return (
                <Box
                  sx={{
                    fontSize: '10px',
                    padding: '6px 8px',
                    bgcolor: 'white',
                  }}
                >
                  <Box>{datum.label}</Box>
                  <Box sx={{ fontWeight: 600 }}>
                    {datum.value}&nbsp;{`(${percent}%)`}
                  </Box>
                </Box>
              )
            }}
            legends={[
              {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: matches ? 20 : 120,
                translateY: 20,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 14,
                itemTextColor: '#000000',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
          />
        </Box>
      </Box>
    </ResponseItemWrapper>
  )
}

export type PieChartResponseProps = {
  title: string
  count: number
  data: { id: string; value: number; color: string }[]
}
