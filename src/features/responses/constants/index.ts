import { LeavePeriod, LeaveType } from '@/features/forms/types'

export const RESPONSES_COLLECTION = 'responses'

export const PIE_COLORS = ['#3366cc', '#DC3912', '#FF9900', '#109618']
export const LEAVE_TYPE_COLOR: Record<LeaveType, string> = {
  Sick: PIE_COLORS[0],
  Vacation: PIE_COLORS[1],
  Business: PIE_COLORS[2],
  Other: PIE_COLORS[3],
}

export const LEAVE_PERIOD_COLOR: Record<LeavePeriod, string> = {
  'Full Day': PIE_COLORS[0],
  'First Half': PIE_COLORS[1],
  'Second Half': PIE_COLORS[2],
}
