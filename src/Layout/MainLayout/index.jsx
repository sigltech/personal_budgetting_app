import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomePageNavbar } from '../../components'
import './style.css'

export default function index() {
  return (
    <>
      <HomePageNavbar />
      <Outlet />
    </>
  )
}
