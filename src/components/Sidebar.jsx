import React from 'react'
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
}
  from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../index.css'
export default function Sidebar() {
  const location = useLocation()
  const Dashboard = location.pathname === '/'
  const Contract = location.pathname === '/contracts'
  const Payment = location.pathname === '/payments'


  return (
    <Card className="Sidbar w-[270px]  p-[25px] pt-[101px] shadow-xl shadow-blue-gray-900/5 bg-customBg rounded-[50px]  flex flex-col  justify-between ">
      <List className='min-w-full'>
        <NavLink to='/'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor ${Dashboard ? 'activeSaidbar' : ''}`}>
          <ListItemPrefix >
          <svg className={`h-5 w-5 `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8 14.5c.23 0 .843-.226 1.487-1.514c.306-.612.563-1.37.742-2.236H5.771c.179.866.436 1.624.742 2.236C7.157 14.274 7.77 14.5 8 14.5M5.554 9.25a14.4 14.4 0 0 1 0-2.5h4.892a14.5 14.5 0 0 1 0 2.5zm6.203 1.5c-.224 1.224-.593 2.308-1.066 3.168a6.53 6.53 0 0 0 3.2-3.168zm2.623-1.5h-2.43a16 16 0 0 0 0-2.5h2.429a6.5 6.5 0 0 1 0 2.5Zm-10.331 0H1.62a6.5 6.5 0 0 1 0-2.5h2.43a16 16 0 0 0 0 2.5Zm-1.94 1.5h2.134c.224 1.224.593 2.308 1.066 3.168a6.53 6.53 0 0 1-3.2-3.168m3.662-5.5h4.458c-.179-.866-.436-1.624-.742-2.236C8.843 1.726 8.23 1.5 8 1.5s-.843.226-1.487 1.514c-.306.612-.563 1.37-.742 2.236m5.986 0h2.134a6.53 6.53 0 0 0-3.2-3.168c.473.86.842 1.944 1.066 3.168M5.31 2.082c-.473.86-.842 1.944-1.066 3.168H2.109a6.53 6.53 0 0 1 3.2-3.168ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0" clipRule="evenodd"></path></svg>
          </ListItemPrefix>
          Loyihalarim
        </ListItem >
        </NavLink>
        <NavLink to='/contracts '>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Contract ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg className={`h-5 w-5 `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-1a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm-2-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path><path d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1zm7 3h2v15H6V5h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-6 0V4h4v1z"></path></g></svg>
          </ListItemPrefix>
          Shartnomalar
        </ListItem>
        </NavLink>
        <NavLink to='/payments'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Payment ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg className={`h-5 w-5 `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8V6H7v2zm0 8v-5H7v5zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zM3 20h15v2H3a2 2 0 0 1-2-2V9h2z"></path></svg>
          </ListItemPrefix>
          To’lovlar 
        </ListItem>
        </NavLink>
      </List>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100  mt-[180px]` }>
          <ListItemPrefix>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163" clipRule="evenodd"></path></svg>
          </ListItemPrefix>
          Chiqish
        </ListItem>
    </Card>
    
  )
}