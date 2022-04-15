import { firestore } from '@/lib/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import { useMutation, useQueryClient } from 'react-query'
import { RESPONSES_COLLECTION } from '../constants'

type Payload = {
  params: {
    id: string
  }
}

export const useDeleteResponse = () => {
  const queryClient = useQueryClient()

  return useMutation<void, void, Payload>(
    async ({ params }) => {
      await deleteDoc(doc(firestore, RESPONSES_COLLECTION, params.id))
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(RESPONSES_COLLECTION)
      },
    }
  )
}
