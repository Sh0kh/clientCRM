import React, { useState, useRef, useEffect } from 'react';
import PDF from '/images/PDF.png';
import CONFIG from '../utils/config';
import { gql, useQuery } from '@apollo/client';

const GET_CONTRACT = gql`
  query {
    CommonClientProject(ClientId: 8) {
      project {
        id
        name
      }
      contract {
        name
        id
        path
      }
    }
  }
`;

function Contracts() {
  const [isActive, setActive] = useState(false)

  const modalRef = useRef(null);
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setActive(false);
    }
  };
  useEffect(() => {
    if (isActive ) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);
  const { data: AllContract } = useQuery(GET_CONTRACT);
  
  const [selectedProject, setSelectedProject] = useState(null);

  const ActivePaymentModal2 = (project) => {
    setSelectedProject(project);
    setActive(!isActive)
  };

  const downloadFile = async (path, name) => {
    try {
      const response = await fetch(CONFIG.API_URL + path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/octet-stream', 
        },
      });

      if (response.ok) {
        const blob = await response.blob(); 
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement('a');
        link.href = url;
        link.download = name; 
        link.style.display = 'none'; 
        document.body.appendChild(link);
        link.click(); 
        window.URL.revokeObjectURL(url); 
        document.body.removeChild(link); 
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <div className='Contracts w-full pb-[50px] pr-[200px]'>
      <div className='mt-[50px]'>
        <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
          Shartnomalar
        </h1>
        <div className='Contracts__wrapper mt-[25px] grid grid-cols-3 gap-[30px]'>
          {AllContract?.CommonClientProject?.map((project) => (
            <div key={project.project.id} className='Contract__card bg-white p-[30px] text-center rounded-[16px] w-[284px]'>
              <img src={PDF} alt="PDF icon" className='mx-auto' />
              <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
                {project?.project?.name}
              </span>
              <button 
                onClick={() => ActivePaymentModal2(project)} 
                className='p-[8px] bg-btnColor rounded-[16px] w-[224px] border-2 border-btnColor transition duration-500 hover:bg-transparent'
              >
                Ochish
              </button>
            </div>
          ))}
        </div>

       
      </div>
      <div className={`PaymentModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isActive ? 'PaymentModalActive' : ''}`}>
        <div ref={modalRef} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px]'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
          Shartnomalar
          </h2>
          <div className='mt-6'>
            {selectedProject.contract.map((contract) => (
              <div key={contract.id} className='mb-4 flex items-center justify-center'>
                <button 
                  onClick={() => downloadFile(contract.path, contract.name)} 
                  className="flex items-center justify-center gap-[5px] flex-col text-[white]"
                >
                  <img src={PDF} alt={contract.name} className='inline' />
                  <span>{contract.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contracts;
