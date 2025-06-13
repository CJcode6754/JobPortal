import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const ViewAllJobs = () => {
  return (
    <section className='m-auto max-w-lg my-12 px-6'>
      <Link
        to='/jobs'
        className='flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl'
      >
        View All Jobs <FaArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </section>
  );
};

export default ViewAllJobs