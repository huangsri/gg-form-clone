import { LeavePeriod, LeaveType } from '../forms/types'

export type Response = {
  id: string
  name: string
  leavePeriod: LeavePeriod
  leaveType: LeaveType
  when: string
  createdAt: number
}
