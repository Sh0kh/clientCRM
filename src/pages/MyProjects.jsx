import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { gql, useQuery } from '@apollo/client';
import { $axios } from '../utils';

// GraphQL Query
const GET_PROJECT = gql`
  query($clientId: Int!) {
    CommonClientProject(ClientId: $clientId) {
      project {
        name
        startAt
        endAt
      }
      finishedPercentage
    }
  }
`;

function MyProjects() {
  const [clientId, setClientId] = useState(null);

  const GetProfileFoto = () => {
    $axios.get('/common-user/myInformation', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      setClientId(response.data.id);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    GetProfileFoto();
  }, []);

  // Use the client ID to fetch projects if it is available
  const { data: MyProject, loading, error } = useQuery(GET_PROJECT, {
    variables: { clientId },
    skip: !clientId, // Skip the query until clientId is available
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const hasProjects = MyProject?.CommonClientProject?.length > 0;

  return (
    <div className='MyProject w-full pb-[50px] pr-[200px]'>
      <div className='mt-[50px]'>
        <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
          Loyihalarim
        </h1>
        {!hasProjects ? (
          <div className='w-full h-[400px] flex items-center justify-center'>
            <h2 className='font-bold text-[#818080]'>
              Loyihalar hozircha yoq !
            </h2>
          </div>
        ) : (
          <div className='MyProject__wrapper mt-[25px] grid grid-cols-3 gap-[30px]'>
            {MyProject.CommonClientProject.map((i) => (
              <div className='MyProject__card bg-white text-center rounded-[16px] w-[284px] pb-[10px] h-fit' key={i.project.name}>
                <div className='w-full p-[30px]'>
                  <div className='w-[105px] h-[105px] mx-auto'>
                    <CircularProgressbar
                      value={i.finishedPercentage}
                      text={`${i.finishedPercentage}%`}
                      strokeWidth={12}
                      styles={buildStyles({
                        textColor: "#00C853",
                        pathColor: "#00C853",
                        trailColor: "#d6d6d6",
                        textSize: '30px',
                        textAnchor: 'middle',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      })}
                    />
                  </div>
                  <span className='font-[500] text-[16px] font-montserrat block mb-[30px] mt-[10px]'>
                    {i.project.name}
                  </span>
                  <div className='flex items-center gap-[10px] flex-col w-full'>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center gap-[10px]'>
                        <svg className='text-[#83818E]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path>
                        </svg>
                        <span className='font-[500] text-[16px] text-[#83818E] font-montserrat'>
                          Start
                        </span>
                      </div>
                      <span className='font-[500] text-[16px] text-[#83818E] font-montserrat'>
                        {i.project.startAt.split('T')[0]}
                      </span>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center gap-[10px]'>
                        <svg className='text-[#83818E]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                          <defs>
                            <mask id="ipSCheckOne0">
                              <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                                <path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path>
                                <path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path>
                              </g>
                            </mask>
                          </defs>
                          <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)"></path>
                        </svg>
                        <span className='font-[500] text-[16px] text-[#83818E] font-montserrat'>
                          Finish
                        </span>
                      </div>
                      <span className='font-[500] text-[16px] text-[#83818E] font-montserrat'>
                        {i.project.endAt.split('T')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProjects;
