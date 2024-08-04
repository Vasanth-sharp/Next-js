import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFound = () => {
    const router=useRouter()
    useEffect(()=>{
        const timer=setTimeout(()=>{
            router.push("/")
        },3000)

        return ()=>clearTimeout(timer)
    })
  return (
    <Box sx={{margin:20,textAlign:"center"}}>
        <Typography variant='h4'>Whoops!,Page Not Found</Typography>
        <Link href='/'><Button variant='text'>Go to Home..</Button></Link>
    </Box>
  )
}

export default PageNotFound