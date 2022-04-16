import { useInfiniteQuery } from 'react-query'

import { fetchAPI } from '@/lib/api'

import { PASSENGERS } from '../constants'
import { Passenger } from '../types'

const defaultMeta = {
  page: 0,
  size: 7,
}

type Meta = {
  size: number
  page: number
}

type Response = {
  data: Passenger[]
  totalPages: number
  totalPassengers: number
}

export const usePassengers = () => {
  return useInfiniteQuery<{ data: Passenger[]; meta: Meta }>({
    queryKey: [PASSENGERS],
    queryFn: async ({ pageParam = defaultMeta }) => {
      const response = await fetchAPI<Response>({
        baseURL: 'https://api.instantwebtools.net/v1/passenger',
        params: pageParam,
      })

      return { data: response.data.data, meta: pageParam }
    },
    getNextPageParam: (lastPage) => {
      return {
        page: lastPage.meta.page + 1,
        size: defaultMeta.size,
      }
    },
  })
}
