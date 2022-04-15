export type FormInput = {
  name: string
  leavePeriod: 'Full Day' | 'First Half' | 'Second Half'
  leaveType: 'Sick' | 'Vacation' | 'Business' | 'Other'
  when: string
}
