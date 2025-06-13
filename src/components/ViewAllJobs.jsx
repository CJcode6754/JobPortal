import React from 'react'

const ViewAllJobs = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <q
        to='/jobs'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Jobs
      </q>
    </section>
  );
};

export default ViewAllJobs