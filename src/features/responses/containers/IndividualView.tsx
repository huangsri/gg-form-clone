import { useResponsesData } from '../services'

import { Grid } from '@/components/shared'

import { Form, FormTitle } from '@/features/forms/components'
import { FORM_TITLE } from '@/features/forms/constants'

type IndividualViewProps = {
  currentIndex: number
}

export const IndividualView = (props: IndividualViewProps) => {
  const { currentIndex } = props

  const data = useResponsesData()

  if (!data) return null

  const currentResponse = data[currentIndex]

  return (
    <Grid>
      <FormTitle title={FORM_TITLE} isReadOnly />

      <Form
        isLoading={false}
        defaultValues={{
          leavePeriod: currentResponse.leavePeriod,
          leaveType: currentResponse.leaveType,
          name: currentResponse.name,
          when: currentResponse.when,
        }}
      />
    </Grid>
  )
}
