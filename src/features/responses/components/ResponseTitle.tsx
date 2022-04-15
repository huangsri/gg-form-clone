import { Box, Tab } from '@mui/material'
import { styled } from '@mui/system'
import { TabList } from '@mui/lab'

import { pluralize } from '@/lib/utils'

type ResponseTitleProps = {
  count: number
  handleChangeTab: (event: React.SyntheticEvent, newValue: string) => void
}

export const ResponseTitle = (props: ResponseTitleProps) => {
  const { count, handleChangeTab } = props

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: '8px',
        border: '1px solid #dadce0',
      }}
    >
      <Box sx={{ fontSize: '28px', padding: '20px 24px 12px' }}>
        {count} {pluralize({ count, one: 'response', other: 'responses' })}
      </Box>

      <CustomTab handleChange={handleChangeTab} />
    </Box>
  )
}

type CustomTabProps = {
  handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

const CustomTab = (props: CustomTabProps) => {
  const { handleChange } = props

  return (
    <Box>
      <StyledTabs onChange={handleChange} aria-label="styled tabs example">
        <StyledTab value="1" label="Summary" />
        <StyledTab value="2" label="Question" />
        <StyledTab value="3" label="Individual" />
      </StyledTabs>
      <Box sx={{ p: 3 }} />
    </Box>
  )
}

type StyledTabsProps = {
  children?: React.ReactNode
  onChange: (event: React.SyntheticEvent, newValue: string) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <TabList
    {...props}
    variant="fullWidth"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    sx={{ borderBottom: '1px solid #dadce0' }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '3px',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '58px',
    backgroundColor: '#673ab7',
    borderRadius: '3px 3px 0 0',
  },
})

type StyledTabProps = {
  label: string
  value: string
}

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    marginRight: theme.spacing(1),
    color: '#3c4043',
    '&.Mui-selected': {
      color: '#673ab7',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)
