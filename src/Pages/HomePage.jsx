import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = (isHome) => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={isHome}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage