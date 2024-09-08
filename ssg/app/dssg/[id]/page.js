import React from 'react'

export const generateStaticParams=async()=>{
    const users=await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
    const paths=users.map((user)=>{
        return {
            params:{id:user.id.toString()}
        }
    })
    return paths
}

async function dssg(params) {
    const user=await fetch(`https://jsonplaceholder.typicode.com/users/${params.params.id}`,{cache:"force-cache"}).then(res=>res.json())
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.website}</h3>
    </div>
  )
}

export default dssg