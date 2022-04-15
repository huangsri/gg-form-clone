import { Box } from '@mui/material'
import { useState } from 'react'

import { useAddResponse } from '@/features/responses/services'

import { Form, FormSuccess, FormTitle } from '../components'

const formTitle = 'Leave Form'

export const FormContainer = () => {
  const [finished, setFinished] = useState(false)

  const { mutate: addResponse, isLoading } = useAddResponse()

  return (
    <Box>
      {finished ? (
        <FormSuccess
          title={formTitle}
          handleReSubmit={() => setFinished(false)}
        />
      ) : (
        <Box sx={{ display: 'grid', gap: '12px' }}>
          <FormTitle title={formTitle} />

          <Form
            onSubmitForm={(data) => {
              addResponse(
                { data },
                {
                  onSuccess() {
                    setFinished(true)
                  },
                }
              )
            }}
            isLoading={isLoading}
          />
        </Box>
      )}
    </Box>
  )
}
