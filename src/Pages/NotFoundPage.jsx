import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50'>
      <FaExclamationTriangle className='text-yellow-500 w-24 h-24 mb-8' />
      <h1 className='text-6xl font-bold mb-4 text-gray-800'>404</h1>
      <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Page Not Found</h2>
      <p className='text-xl mb-8 text-gray-600'>Sorry, this page doesn't exist</p>
      <Link
        to='/'
        className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-xl'
      >
        Go Back Home
      </Link>
    </section>
  )
}

export default NotFoundPage