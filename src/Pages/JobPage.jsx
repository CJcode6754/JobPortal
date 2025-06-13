import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapPin, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Card from '../components/Card';

const JobPage = ({deleteJob}) => {
  const { id } = useParams();
  const job = useLoaderData();
const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this Job?');

    if(!confirm) return;

    deleteJob(jobId);

    toast.success('Job Deleted Succesfully');
    
    navigate('/jobs');
  }
  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <a
            href='/jobs'
            className='text-purple-600 hover:text-purple-700 flex items-center font-medium'
          >
            <FaArrowLeft className='mr-2 w-4 h-4' /> Back to Job Listings
          </a>
        </div>
      </section>

      <section className='bg-gradient-to-br from-purple-50 to-blue-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <main className='lg:col-span-2 space-y-6'>
              <Card>
                <div className='text-purple-600 mb-4 font-medium'>{job.type}</div>
                <h1 className='text-4xl font-bold mb-4 text-gray-800'>{job.title}</h1>
                <div className='flex items-center text-gray-600 mb-6'>
                  <FaMapPin className='w-5 h-5 mr-2 text-purple-500' />
                  <p>{job.location}</p>
                </div>
              </Card>

              <Card className='mt-6'>
                <h3 className='text-purple-600 text-2xl font-bold mb-6'>
                  Job Description
                </h3>
                <p className='mb-6 text-gray-700 leading-relaxed'>{job.description}</p>
                <h3 className='text-purple-600 text-2xl font-bold mb-4'>
                  Salary
                </h3>
                <p className='text-xl font-semibold text-gray-800'>{job.salary} / Year</p>
              </Card>
            </main>

            <aside className="space-y-6">
              <Card>
                <h3 className='text-2xl font-bold mb-6 text-gray-800'>Company Info</h3>
                <h2 className='text-xl font-semibold mb-3 text-gray-800'>{job.company.name}</h2>
                <p className='mb-6 text-gray-600'>{job.company.description}</p>
                
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2'>Contact Email:</h3>
                    <p className='bg-purple-100 p-3 rounded-lg font-medium text-purple-800'>
                      {job.company.contactEmail}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2'>Contact Phone:</h3>
                    <p className='bg-purple-100 p-3 rounded-lg font-medium text-purple-800'>
                      {job.company.contactPhone}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='mt-6'>
                <h3 className='text-xl font-bold mb-6 text-gray-800'>Manage Job</h3>
                <div className='space-y-4'>
                  <a
                    href={`/edit-job/${job.id}`}
                    className='flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg w-full transition-colors'
                  >
                  <FaEdit className='w-4 h-4 mr-2' />
                    Edit Job
                  </a>
                  <button
                    onClick={() => onDeleteClick(job.id)}
                    className='flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg w-full transition-colors'
                  >
                    <FaTrash className='w-4 h-4 mr-2' />
                    Delete Job
                  </button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, JobLoader };
