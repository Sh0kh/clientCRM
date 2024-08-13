import React, { useState, useRef, useEffect } from 'react'
import PaymentFoto from '/images/payment.png'
import PaymentFoto2 from '/images/PaymentCek.png'
function Payments() {
  const [isActive, setActive] = useState(false)
  const [isActive2, setActive2] = useState(false)
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);

  const ActivePaymentModal = () => {
    setActive(!isActive)
  }
  const ActivePaymentModal2 = () => {
    setActive2(!isActive2)
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
  return (
    <div className='Payment w-full pb-[50px] '>
      <div className='mt-[50px]'>
        <div className='Payment__title flex items-center justify-between'>
          <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
            To’lovlar
          </h1>
          <div className='flex items-center gap-[15px]'>
              <label className="relative overflow-hidden inline-block w-[174px]  bg-btnColor cursor-pointer px-[16px] py-[8px] rounded-[24px] flex items-center gap-[10px] border-btnColor border-2 hover:bg-transparent transition duration-500" htmlFor="photo">
              <svg className='text-[18px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m31.57-21.633c-1.055-.937-2.25-1.43-3.515-1.43c-1.313 0-2.462.446-3.54 1.407l-10.593 9.469l-4.336-3.938c-.985-.867-2.04-1.336-3.164-1.336c-1.032 0-2.04.446-3 1.313L4.129 39.73V13.88c0-2.438 1.312-3.68 3.656-3.68h40.43c2.32 0 3.656 1.242 3.656 3.68v25.875Zm-21.469.258c3.024 0 5.508-2.484 5.508-5.531c0-3.023-2.484-5.531-5.508-5.531c-3.046 0-5.53 2.508-5.53 5.531a5.54 5.54 0 0 0 5.53 5.531"></path></svg>
              <span className='text-[16px] font-[500] font-montserrat text-[#1F1E30]'>
                surat yuklash
              </span>
                <input
                  id="photo"
                  accept="image/*"
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[100px]"
                />
              </label>
            <button onClick={ActivePaymentModal} className=' px-[16px] py-[8px] rounded-[24px] border-2 border-[#83818E] text-[#83818E] font-montserrat font-[500] text-[16px] hover:bg-[#83818E] hover:text-white transition duration-500'>
              to’lovni kiritish
            </button>
          </div>
        </div>
        <div className='Payment__wrapper mt-[25px] grid grid-cols-3 gap-[30px] pr-[200px]'>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
          <div className=' Payment__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
            <img src={PaymentFoto} alt="foto" className='mx-auto ' />
            <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
              “Loyiha nomi”
            </span>
            <button onClick={ActivePaymentModal2} className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent '>
              Ochish
            </button>
          </div>
        </div>
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
            To’lov qabul qilindi
          </h2>
          <div className='w-full'>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                miqdori
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                4 000 000
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                sanasi
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                12.03.24
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                turi
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                naqt
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                to’lovchi
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                Baxtiyorov Akmal
              </span>
            </div>
            <div className='flex items-center justify-between mb-[10px]'>
              <span className='text-[#83818E] text-[16px] font-[500] font-montserrat'>
                qabul qiluvchi
              </span>
              <span className='font-montserrat font-[500]  text-[16px] text-[#1F1E30]'>
                Paxriddinov Bexruz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments