import { Box, Tab, Tabs } from '@mui/material'
import { styled } from '@mui/system'

import { pluralize } from '@/lib/utils'

type ResponseTitleProps = {
  count: number
  currentTab: number
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void
}

export const ResponseTitle = (props: ResponseTitleProps) => {
  const { count, currentTab, handleChangeTab } = props

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

      <CustomTab currentTab={currentTab} handleChange={handleChangeTab} />
    </Box>
  )
}

type CustomTabProps = {
  currentTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

const CustomTab = (props: CustomTabProps) => {
  const { currentTab, handleChange } = props

  return (
    <Box>
      <StyledTabs
        value={currentTab}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Summary" />
        <StyledTab label="Question" />
        <StyledTab label="Individual" />
      </StyledTabs>
      <Box sx={{ p: 3 }} />
    </Box>
  )
}

type StyledTabsProps = {
  children?: React.ReactNode
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
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
