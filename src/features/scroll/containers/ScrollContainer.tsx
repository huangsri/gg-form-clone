import { Fragment, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { faker } from '@faker-js/faker'

import { Card, Grid } from '@/components/shared'
import { usePassengers } from '../services'
import { Passenger } from '../types'
import { Box, Button } from '@mui/material'
import { LoadingResponse } from '@/features/responses/components'

export const ScrollContainer = () => {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    usePassengers()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Grid>
      {isLoading ? (
        <LoadingResponse text="Loading..." />
      ) : (
        <Fragment>
          {data?.pages.map((passenger, idx) => {
            return (
              <Fragment key={idx}>
                {passenger.data.map((p) => {
                  return <PassengerItem key={p._id} data={p} />
                })}
              </Fragment>
            )
          })}

          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            ref={ref}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </Button>
        </Fragment>
      )}
    </Grid>
  )
}

type PassengerItemProps = {
  data: Passenger
}

const PassengerItem = (props: PassengerItemProps) => {
  const { data } = props

  const airline = data.airline[0]

  const [[from, to]] = useState(() => [
    faker.address.cityName(),
    faker.address.cityName(),
  ])

  return (
    <Card
      sx={(theme) => ({
        padding: '12px',
        [theme.breakpoints.up('sm')]: {
          padding: '24px',
        },
      })}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Box
            sx={(theme) => ({
              fontSize: '18px',
              fontWeight: 600,
              [theme.breakpoints.up('sm')]: {
                fontSize: '24px',
              },
            })}
          >
            {airline.name}
          </Box>
          <Box sx={{ fontSize: '14px' }}>{airline.slogan}</Box>
        </Box>

        <Box
          sx={{
            img: {
              width: '100px',
            },
          }}
        >
          <img src={airline.logo} alt={airline.name} />
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          mt: '24px',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '18px',
          '.label': {
            fontSize: '12px',
          },
          '.value': {
            fontSize: '16px',
            [theme.breakpoints.up('sm')]: {
              fontSize: '18px',
            },
          },
        })}
      >
        <Box>
          <Box className="label">Passenger Name</Box>
          <Box className="value">{data.name}</Box>
        </Box>
        <Box>
          <Box className="label">From</Box>
          <Box className="value">{from}</Box>
        </Box>
        <Box>
          <Box className="label">To</Box>
          <Box className="value">{to}</Box>
        </Box>
      </Box>
    </Card>
  )
}
