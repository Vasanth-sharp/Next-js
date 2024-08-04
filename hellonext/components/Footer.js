import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const date=new Date()
  return (
    <Box sx={{textAlign:"center"}}>
        <Typography variant='caption'>&copy;{date.getFullYear()} claimed</Typography>
    </Box>
  )
}

export default Footer