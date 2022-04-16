import Head from 'next/head'
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material'
import { Fragment, MouseEvent, useState } from 'react'
import { NextPage } from 'next'
import { deepPurple } from '@mui/material/colors'
import NextLink from 'next/link'

import { ResponseContainer } from '@/features/responses/containers'
import { ProtectedPage } from '@/features/auth/components'
import { useAuthContext } from '@/features/auth/context'
import { Logout } from '@mui/icons-material'

const FormResponsePage: NextPage = () => {
  return (
    <ProtectedPage>
      <Fragment>
        <Head>
          <title>Responses</title>
        </Head>

        <Box sx={{ bgcolor: deepPurple[50], minHeight: '100vh' }}>
          <NavBar />

          <Box sx={{ maxWidth: '770px', mx: 'auto', pt: '72px' }}>
            <ResponseContainer />
          </Box>
        </Box>
      </Fragment>
    </ProtectedPage>
  )
}

export default FormResponsePage

const NavBar = () => {
  const { user, signOut } = useAuthContext()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        height: '60px',
        width: '100vw',
        position: 'fixed',
        top: 0,
        bgcolor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #dadce0',
        px: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          a: {
            width: '40px',
            height: '40px',
          },
        }}
      >
        <NextLink href="/forms">
          <a>
            <img
              alt="gg form"
              src="/icons/form.svg"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
        </NextLink>

        <Box sx={{ fontSize: '18px', ml: '16px' }}>GG Form</Box>
      </Box>

      <Box>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, textTransform: 'uppercase' }}>
            {user?.email?.[0]}
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => signOut()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}
