import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  defaultFormValue,
  leavePeriodOptions,
  leaveTypeOptions,
} from '../constants'

import { FormInput } from '../types'
import { formSchema } from '../schema'
import { LoadingButton } from '@mui/lab'

type FormProps = {
  onSubmitForm: (data: FormInput) => void
  isLoading: boolean
}

export const Form = (props: FormProps) => {
  const { onSubmitForm, isLoading } = props

  const { register, handleSubmit, control, formState, reset } =
    useForm<FormInput>({
      defaultValues: defaultFormValue,
      resolver: zodResolver(formSchema),
    })
  const { errors } = formState

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitForm(data)
      })}
    >
      <Box sx={{ display: 'grid', gap: '12px' }}>
        <FormWrapper title="Name">
          <TextField
            variant="standard"
            placeholder="Your answer"
            sx={{ width: '50%' }}
            {...register('name')}
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
          />
        </FormWrapper>
        <FormWrapper title="Leave Period">
          <Controller
            control={control}
            name="leavePeriod"
            render={({ field }) => {
              const { onChange, value } = field

              return (
                <RadioGroup
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={onChange}
                  value={value}
                >
                  {leavePeriodOptions.map((opt) => {
                    return (
                      <FormControlLabel
                        key={opt.value}
                        value={opt.value}
                        label={opt.label}
                        control={<Radio />}
                      />
                    )
                  })}
                </RadioGroup>
              )
            }}
          />
        </FormWrapper>
        <FormWrapper title="Leave Type">
          <Controller
            control={control}
            name="leaveType"
            render={({ field }) => {
              const { onChange, value } = field

              return (
                <Select
                  value={value}
                  onChange={onChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{ width: '176px' }}
                >
                  {leaveTypeOptions.map((opt) => {
                    return (
                      <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </MenuItem>
                    )
                  })}
                </Select>
              )
            }}
          />
        </FormWrapper>
        <FormWrapper title="When">
          <FormControl error={Boolean(errors.when?.message)}>
            <Input type="date" {...register('when')} />
            {errors.when?.message && (
              <FormHelperText sx={{ mx: 0 }}>
                {errors.when?.message}
              </FormHelperText>
            )}
          </FormControl>
        </FormWrapper>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            button: {
              textTransform: 'unset',
            },
          }}
        >
          <LoadingButton
            type="submit"
            variant="contained"
            sx={{ px: '24px' }}
            loading={isLoading}
          >
            Submit
          </LoadingButton>
          <Button variant="text" onClick={() => reset()}>
            Clear form
          </Button>
        </Box>
      </Box>
    </form>
  )
}

type FormWrapperProps = {
  title: string
  children: React.ReactNode
}

const FormWrapper = (props: FormWrapperProps) => {
  const { title, children } = props

  return (
    <Box
      sx={{
        p: '24px',
        bgcolor: 'white',
        borderRadius: '8px',
        border: '1px solid #dadce0',
      }}
    >
      <Box>{title}</Box>
      <Box sx={{ mt: '16px' }}>{children}</Box>
    </Box>
  )
}
