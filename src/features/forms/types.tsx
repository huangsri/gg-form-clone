import { LEAVE_PERIODS, LEAVE_TYPES } from './constants'

export type LeavePeriod = typeof LEAVE_PERIODS[number]
export type LeaveType = typeof LEAVE_TYPES[number]

export type FormInput = {
  name: string
  leavePeriod: LeavePeriod
  leaveType: LeaveType
  when: string
}
