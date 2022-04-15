import { Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

type FormTitleProps = {
  title: string
  description?: string
  isReadOnly?: boolean
}

export const FormTitle = (props: FormTitleProps) => {
  const { title, isReadOnly, description } = props

  return (
    <Box
      sx={{
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white',
        border: '1px solid #dadce0',

        '::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          height: '10px',
          width: '100%',
          bgcolor: deepPurple[400],
        },
      }}
    >
      <Box
        sx={{
          pt: '22px',
          px: '24px',
          pb: '16px',
          borderBottom: '1px solid #dadce0',
        }}
      >
        {isReadOnly && (
          <Box sx={{ fontSize: '12px', color: '#70757a' }}>
            Responses cannot be edited
          </Box>
        )}
        <Box sx={{ fontSize: '32px', mt: isReadOnly ? '12px' : 0 }}>
          {title}
        </Box>
        {description && <Box sx={{ mt: '12px' }}>{description}</Box>}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '12px 24px 16px',
        }}
      >
        <Box sx={{ color: 'red' }}>* Required</Box>
      </Box>
    </Box>
  )
}
