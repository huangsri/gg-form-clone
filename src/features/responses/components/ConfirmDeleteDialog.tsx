import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

type ConfirmDeleteDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onDelete: () => void
}

export const ConfirmDeleteDialog = (props: ConfirmDeleteDialogProps) => {
  const { open, setOpen, onDelete } = props

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Response</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this response? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onDelete} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}
