import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().nonempty('Required'),
  leavePeriod: z.string().nonempty('Required'),
  leaveType: z.string().nonempty('Required'),
  when: z.string().nonempty('Required'),
})
