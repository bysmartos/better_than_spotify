import React from 'react'
import useAuth from './useAuth'

export default function Dashboard({code}: any) {
    const accesToken= useAuth(code)
  return (
    <div>{code}</div>
  )
}
