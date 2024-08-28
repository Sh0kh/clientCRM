import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { $axios } from '../utils'
import CONFIG from '../utils/Config'
function Navbar() {
  const [IsActive, setActive] = useState(false)
  const NavModal = () =>{
    setActive(!IsActive)
  }
  const location = useLocation()
  const Dashboard = location.pathname === '/'
  const Payment = location.pathname === '/payments'
  const Contract  = location.pathname === '/contract'
  const FotoPerson = 'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'
  const [information, setInformation] = useState([])
  const GetProfileFoto = ()=>{
    $axios.get('/common-user/myInformation', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {        
        setInformation(response.data)       
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(()=>{
    GetProfileFoto()
  },[])
  return (
    <div className='NavBar w-full relative' >
      <div className='flex items-center  justify-between gap-[5px] w-full'>
       <form></form>
        <NavLink to='/profil'>
            <div className='bg-white rounded-[16px] border-[0.5px] border-[#B4B5B0] p-[2px] px-[9px] flex items-center gap-[10px]'>
                <img className='w-[28px] h-[28px] object-cover rounded-[50%]' src={information.avatarUrl ?  CONFIG.API_URL + information.avatarUrl : FotoPerson} alt="" />
                <div className='flex  flex-col'>
                  <span className='text-[16px] font-medium font-montserrat'>
                    {information.name}
                  </span>
                  <span className='text-[12px] font-medium text-[#83818E] font-montserrat'>
                  {information.role}
                  </span>
                </div>
            </div>
          </NavLink>
        <button className='burger text-[30px] hidden'  onClick={NavModal}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18"></path></svg>
        </button>
      </div>
      <div className={`${IsActive ? 'NavBarActive' : ''} NavBarModal fixed bg-customBg top-[0px] left-[0px] right-[0px] bottom-[] px-[25px] py-[30px] flex justify-between `}>
          <nav>
            <NavLink to='/' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px] ${Dashboard ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className={`h-5 w-5 text-white`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8 14.5c.23 0 .843-.226 1.487-1.514c.306-.612.563-1.37.742-2.236H5.771c.179.866.436 1.624.742 2.236C7.157 14.274 7.77 14.5 8 14.5M5.554 9.25a14.4 14.4 0 0 1 0-2.5h4.892a14.5 14.5 0 0 1 0 2.5zm6.203 1.5c-.224 1.224-.593 2.308-1.066 3.168a6.53 6.53 0 0 0 3.2-3.168zm2.623-1.5h-2.43a16 16 0 0 0 0-2.5h2.429a6.5 6.5 0 0 1 0 2.5Zm-10.331 0H1.62a6.5 6.5 0 0 1 0-2.5h2.43a16 16 0 0 0 0 2.5Zm-1.94 1.5h2.134c.224 1.224.593 2.308 1.066 3.168a6.53 6.53 0 0 1-3.2-3.168m3.662-5.5h4.458c-.179-.866-.436-1.624-.742-2.236C8.843 1.726 8.23 1.5 8 1.5s-.843.226-1.487 1.514c-.306.612-.563 1.37-.742 2.236m5.986 0h2.134a6.53 6.53 0 0 0-3.2-3.168c.473.86.842 1.944 1.066 3.168M5.31 2.082c-.473.86-.842 1.944-1.066 3.168H2.109a6.53 6.53 0 0 1 3.2-3.168ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0" clipRule="evenodd"></path></svg>
            <span className='text-white font-montserrat'>
            Loyihalarim
            </span>
            </NavLink>
            <NavLink to='/contracts' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px] ${Contract ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2-1a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm-2-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path><path d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1zm7 3h2v15H6V5h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-6 0V4h4v1z"></path></g></svg>
            <span className='text-white font-montserrat'>
            Shartnomalar
            </span>
            </NavLink>
            <NavLink  to='/payments' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px]  ${Payment ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className="h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8V6H7v2zm0 8v-5H7v5zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zM3 20h15v2H3a2 2 0 0 1-2-2V9h2z"></path></svg>
            <span className='text-white font-montserrat'>
            To’lovlar 
            </span>
            </NavLink>
          </nav>
          <button className='h-[30px]'>
          <svg onClick={NavModal} className='text-[30px] text-btnColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9m0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7m.707-7l2.646-2.646a.5.5 0 0 0 0-.707a.5.5 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706z"></path></svg>
          </button>
      </div>
    </div>
  )
}

export default Navbar