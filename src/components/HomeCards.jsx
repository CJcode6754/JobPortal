import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import Card from '../components/Card'
const HomeCards = () => {
  return (
    <section className='py-8'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
          <Card bg='bg-gradient-to-br from-white to-purple-50'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>For Developers</h2>
            <p className='mt-2 mb-6 text-gray-600'>
              Browse our jobs and start your career today
            </p>
            <Link
              to='/jobs'
              className='inline-flex items-center bg-purple-600 text-white rounded-lg px-6 py-3 hover:bg-purple-700 font-medium transition-colors'
            >
              Browse Jobs <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Card>
          
          <Card bg='bg-gradient-to-br from-white to-blue-50'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>For Employers</h2>
            <p className='mt-2 mb-6 text-gray-600'>
              List your job to find the perfect developer for the role
            </p>
            <Link
              to='/add-job'
              className='inline-flex items-center bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 font-medium transition-colors'
            >
              Add Job <FaPlus className="ml-2 w-4 h-4" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards