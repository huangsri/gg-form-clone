import { Box } from '@mui/material'
import { useState } from 'react'

import { useAddResponse } from '@/features/responses/services'

import { Form, FormSuccess, FormTitle } from '../components'

import { FORM_TITLE } from '../constants'

export const FormContainer = () => {
  const [finished, setFinished] = useState(false)

  const { mutate: addResponse, isLoading } = useAddResponse()

  return (
    <Box>
      {finished ? (
        <FormSuccess
          title={FORM_TITLE}
          handleReSubmit={() => setFinished(false)}
        />
      ) : (
        <Box sx={{ display: 'grid', gap: '12px' }}>
          <FormTitle title={FORM_TITLE} />

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
