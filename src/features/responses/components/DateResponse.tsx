import { sortDate } from '@/lib/utils'
import { Box } from '@mui/material'
import dayjs from 'dayjs'
import { Fragment } from 'react'

import { prepareDate } from '../utils'
import { ResponseItemWrapper } from './ResponseItem'

type DateResponseType = {
  count: number
  data: { date: string; count: number }[]
}

export const DateResponse = (props: DateResponseType) => {
  const { count, data } = props

  const realData = prepareDate(data)

  return (
    <ResponseItemWrapper title="When" count={count}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'max-content  1fr',
          columnGap: '16px',
          alignItems: 'center',
        }}
      >
        {Object.keys(realData)
          .sort(sortDate)
          .map((k, idx) => {
            const currentMonthData = realData[k]

            return (
              <Fragment key={idx}>
                <Box
                  sx={{
                    gridColumn: '1/2',
                    borderRight: '1px solid #000',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {dayjs(k).format('MMM YYYY')}
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gridAutoColumns: 'max-content',
                    gridColumnStart: '2',
                    gap: '4px',
                  }}
                >
                  {Object.keys(currentMonthData).map((_k, _idx) => {
                    const _count = currentMonthData[_k]

                    return (
                      <DateItem
                        key={`date-${idx}-${_idx}`}
                        date={_k}
                        count={_count}
                      />
                    )
                  })}
                </Box>
              </Fragment>
            )
          })}
      </Box>
    </ResponseItemWrapper>
  )
}

type DateItemProps = {
  count: number
  date: string
}

const DateItem = (props: DateItemProps) => {
  const { count, date } = props

  if (count > 1) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '14px',
          bgcolor: '#673ab7',
          border: '3px',
          fontSize: '13px',
          lineHeight: 1,
          p: '3px',
          pl: '10px',
        }}
      >
        <Box sx={{ color: 'white' }}>{date}</Box>
        <Box
          sx={{
            borderRadius: '50%',
            bgcolor: '#f0ebf8',
            color: '#673ab7',
            marginLeft: '8px',
            lineHeight: 1,
            display: 'flex',
            width: '21px',
            height: '21px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {count}
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        borderRadius: '50%',
        bgcolor: '#f0ebf8',
        lineHeight: 1,
        fontSize: '13px',
        display: 'flex',
        width: '27px',
        height: '27px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {date}
    </Box>
  )
}
