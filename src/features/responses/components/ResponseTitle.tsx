import { Box, IconButton, Tab } from '@mui/material'
import { styled } from '@mui/system'
import { TabList } from '@mui/lab'
import { Dispatch, SetStateAction } from 'react'
import { ChevronLeft, ChevronRight, DeleteOutlined } from '@mui/icons-material'

import { pluralize } from '@/lib/utils'

type ResponseTitleProps = {
  count: number
  currentIndex: number
  currentTab: string
  handleChangeTab: (event: React.SyntheticEvent, newValue: string) => void
  handleDelete: () => void
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

export const ResponseTitle = (props: ResponseTitleProps) => {
  const {
    count,
    currentIndex,
    currentTab,
    handleChangeTab,
    handleDelete,
    setCurrentIndex,
  } = props

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

      {currentTab === '2' ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', p: '12px' }}>
            <IconButton
              aria-label="previous"
              onClick={() => setCurrentIndex((s) => s - 1)}
              disabled={currentIndex < 1}
            >
              <ChevronLeft />
            </IconButton>
            <Box sx={{ mx: '8px' }}>{currentIndex + 1}</Box>
            <Box>of</Box>
            <Box sx={{ mx: '8px' }}>{count}</Box>
            <IconButton
              aria-label="next"
              disabled={currentIndex >= count - 1}
              onClick={() => setCurrentIndex((s) => s + 1)}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          <Box sx={{ p: '12px' }}>
            <IconButton aria-label="delete response" onClick={handleDelete}>
              <DeleteOutlined />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box sx={{ p: '12px' }} />
      )}
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
      <StyledTabs onChange={handleChange} aria-label="styled tabs">
        <StyledTab value="1" label="Summary" />
        <StyledTab value="2" label="Individual" />
      </StyledTabs>
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
