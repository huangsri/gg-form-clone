import { doc, setDoc } from 'firebase/firestore'
import { useMutation } from 'react-query'
import { nanoid } from 'nanoid'

import { RESPONSES_COLLECTION } from '../constants'
import { firestore } from '@/lib/firebase'
import { FormInput } from '@/features/forms/types'

type Payload = {
  data: FormInput
}

export const useAddResponse = () => {
  return useMutation<void, void, Payload>(async ({ data }) => {
    await setDoc(doc(firestore, RESPONSES_COLLECTION, nanoid()), {
      ...data,
      createdAt: new Date().getTime(),
    })
  })
}
