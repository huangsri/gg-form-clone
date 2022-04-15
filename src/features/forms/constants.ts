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

export const LEAVE_PERIODS = ['Full Day', 'First Half', 'Second Half'] as const
export const LEAVE_TYPES = ['Sick', 'Vacation', 'Business', 'Other'] as const

export const FORM_TITLE = 'Leave Form'
