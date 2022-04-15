import { collection, getDocs } from 'firebase/firestore'
import { useQuery, useQueryClient } from 'react-query'

import { firestore } from '@/lib/firebase'
import { Response } from '../types'
import { RESPONSES_COLLECTION } from '../constants'

export const useResponses = () => {
  return useQuery({
    queryKey: RESPONSES_COLLECTION,
    queryFn: async () => {
      const result: Response[] = []

      const querySnapshot = await getDocs(
        collection(firestore, RESPONSES_COLLECTION)
      )
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        }

        result.push(data as Response)
      })

      return result
    },
  })
}

export const useResponsesData = () => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData(RESPONSES_COLLECTION) as Response[]
}
