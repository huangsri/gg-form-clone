import { FormInput } from './types'

export const leavePeriodOptions = [
  {
    value: 'Full Day',
    label: 'Full Day',
  },
  {
    value: 'First Half',
    label: 'First Half',
  },
  {
    value: 'Second Half',
    label: 'Second Half',
  },
]

export const leaveTypeOptions = [
  {
    value: 'Sick',
    label: 'Sick',
  },
  {
    value: 'Vacation',
    label: 'Vacation',
  },
  {
    value: 'Business',
    label: 'Business',
  },
  {
    value: 'Other',
    label: 'Other',
  },
]

export const defaultFormValue: FormInput = {
  name: '',
  leavePeriod: 'Full Day',
  leaveType: 'Sick',
  when: '',
}
