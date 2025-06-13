import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown, FaMapPin } from 'react-icons/fa';
import { Link} from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job?.description || "Great job opportunity with excellent benefits.";

  if (!showFullDescription) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
      <div className='p-6'>
        <div className='mb-6'>
          <div className='text-purple-600 my-2 font-medium'>{job?.type || 'Full-time'}</div>
          <h3 className='text-2xl font-bold text-gray-800'>{job?.title || 'Software Developer'}</h3>
        </div>

        <div className='mb-5 text-gray-600'>{description}</div>

        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className='flex items-center text-purple-600 mb-5 hover:text-purple-700 font-medium'
        >
          {showFullDescription ? (
            <>Less <FaChevronUp className="ml-1 w-4 h-4" /></>
          ) : (
            <>More <FaChevronDown className="ml-1 w-4 h-4" /></>
          )}
        </button>

        <h3 className='text-purple-600 mb-4 text-xl font-bold'>{job?.salary || '$75,000'} / Year</h3>

        <div className='border border-gray-200 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>
          <div className='flex items-center text-gray-600'>
            <FaMapPin className='w-4 h-4 mr-2 text-purple-500' />
            {job?.location || 'Remote'}
          </div>
          <Link
            to={`/jobs/${job?.id || '1'}`}
            className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing