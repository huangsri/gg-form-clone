import { Box } from '@mui/material'

import { pluralize } from '@/lib/utils'

type ResponseItemWrapperProps = {
  title: string
  count: number
  children: React.ReactNode
}

export const ResponseItemWrapper = (props: ResponseItemWrapperProps) => {
  const { title, count, children } = props

  return (
    <Box
      sx={{
        border: '1px solid #dadce0',
        borderRadius: '8px',
        bgcolor: 'white',
        p: '20px 12px 24px 24px',
      }}
    >
      <Box>{title}</Box>
      <Box sx={{ fontSize: '12px', mt: '8px' }}>
        {count} {pluralize({ count, one: 'response', other: 'responses' })}
      </Box>
      <Box sx={{ mt: '24px' }}>{children}</Box>
    </Box>
  )
}
