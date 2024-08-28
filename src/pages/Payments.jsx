import React, { useState, useRef, useEffect } from 'react'
import PaymentFoto from '/images/payment.png'
import PaymentFoto2 from '/images/PaymentCek.png'
import { $axios } from '../utils';
// gql
import { gql, useQuery } from '@apollo/client';
const GET_PAYEMTS = gql`
  query($clientId: Int!){
  CommonClientProject(ClientId:$clientId){
    project{
      id
      name
    }
   payments{
	    id
      type
     comment
      count
    }
  }}
`
function Payments() {
  const [isActive, setActive] = useState(false)
  const [isActive2, setActive2] = useState(false)
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);
  const [clientId, setClientId] = useState(null);


  const ActivePaymentModal = () => {
    setActive(!isActive)
  }

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setActive(false);
    }
    if (modalRef2.current && !modalRef2.current.contains(e.target)) {
      setActive2(false);
    }
  };
  useEffect(() => {
    if (isActive || isActive2) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, isActive2]);


  const {data:AllPayments} = useQuery(GET_PAYEMTS,{
    variables:{ clientId },
    skip: !clientId
  })
  const [selectedProject, setSelectedProject] = useState(null);
  const ActivePaymentModal2 = (project) => {
    setActive2(!isActive2)
    setSelectedProject(project);
  }

  const GetID = () => {
    $axios.get('/common-user/myInformation', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      setClientId(response.data.id);
    })
    .catch((error) => {
      console.error('Error fetching profile:', error);
    });
  };

  useEffect(() => {
    GetID();
  }, []);
  

  const hasProject = AllPayments?.CommonClientProject?.length > 0 
  return (
    <div className='Payment w-full pb-[50px] '>
      <div className='mt-[50px]'>
        <div className='Payment__title flex items-center justify-between'>
          <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
            To’lovlar
          </h1>
          </div>
          {!hasProject ?(
             <div className='w-full h-[400px] flex items-center justify-center'>
             <h2 className='font-bold text-[#818080]'>
              To’lovlar hozircha yoq !
             </h2>
           </div>
          ) : (
        <div className='Payment__wrapper mt-[25px] grid grid-cols-3 gap-[30px] pr-[200px]'>
          {AllPayments?.CommonClientProject?.map((i)=>(
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              {i.project.name}
            </span>
            <button onClick={()=>ActivePaymentModal2(i) } className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          ))}
        </div>
          )}
      </div>
      <div className={`PaymentModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isActive ? 'PaymentModalActive' : ''}`}>
        <div ref={modalRef} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px]'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
            To’lov qo’shish
          </h2>
          <form className='mt-[19px] w-full'>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='to’lovchi' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='qabul qiluvchi' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='miqdori' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='sanasi' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <select className='w-full outline-none bg-transparent text-[#807E8B] mb-[30px] border-b-[1px] pb-[5px]'>
              <option value="Web" className='bg-transparent'>plastik</option>
              <option value="Web">naxt</option>
            </select>
            <button onClick={ActivePaymentModal} className='bg-btnColor w-full px-[16px] py-[8px] rounded-[24px] flex items-center justify-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent hover:text-white transition-all duration-500'>
              <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
              </svg>
              <span className='font-[500] text-[16px] font-montserrat'>
                Saqlash
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className={`PaymentModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isActive2 ? 'PaymentModalActive' : ''}`}>
        <div ref={modalRef2} className='Modal bg-white rounded-[16px] p-[30px] pt-[60px] w-[360px] text-center'>
          <img src={PaymentFoto2} alt="foto" className='mx-auto' />
          <h2 className='font-montserrat font-[600] text-[25px] text-[#1F1E30] mb-[30px]'>
          To’lovlar
          </h2>
          {selectedProject?.payments?.map((i)=>(
          <div className='w-full'>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                miqdori:
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                {i.count}
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                turi:
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                {i.type}
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                malumot:
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                {i.comment}
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Payments