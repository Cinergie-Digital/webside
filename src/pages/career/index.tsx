import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { useEffect, useState } from 'react';
import Hero from './Hero';
import { JobParameter } from './types';
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import hero from 'assets/images/cinergie-digital-join-our-team.jpg.png';
import Footer from 'pages/Home/Footer';
import "./career.css";
import Connect from 'components/shared/Connect';
// import Team from './Team';
// import { teamMembers } from './data';
// import { jobListings } from './data'
import Job from './jobs'
import SEO from '../../components/SEO';
// type JobProps = {
//     jobParameters: JobParameter[]
// }

const Blog = () => {
    const [jobs, setJobs] = useState<JobParameter[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const fetchJobs = async (): Promise<void> => {
        // console.log(`http://recruitment.test/api/jobs`)
        try {
            const response = await axios.get("https://api.cinergiedigital.com/recruitment/admin/api_jobs.php")
            const jobsData: JobParameter[] = response.data.data
            setJobs(jobsData)
            // console.log("Job data: ", jobsData)


        }
        catch (err) {
            console.log("Error fetching the jobs: ", err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchJobs()
    }, [])

    // console.log("Data: ", jobs)

    if (loading) {
        return (<div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column align-items-center gap-2">
                <Spinner animation="border" variant="primary" role="status" />
                <div>Loading...</div>
            </div>
        </div>)
    }

    return (
        <>
           <div
  className="bg-gradient2"
  style={{
    background: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Changed from 'top' to 'center' to show people at the bottom
    position: 'relative',
     height: '95vh',
     
  }}
>
  <div
    className="overlay"
    style={{
      position: 'absolute',
      top: 50, // Assuming this is in px; if not, clarify unit (e.g., top: '50px')
      width: '100%',
      height: '100%',
    //   background: 'rgba(0, 0, 0, 0.4)', // Add semi-transparent overlay for text readability if needed
    }}
  ></div>
   
                 <SEO
          title="Careers at Cinergie Digital | Join a Growing Tech & AI Company in UAE "
          description="Join Cinergie Digital and work on transformative technology projects shaping global enterprises. Build your future with us in UAE and beyond.  "
          url="https://cinergiedigital.com/"
        />
   <Navbar5
      isSticky={true}
      hideSearch

    />

                <Hero />
            </div>

            {/* <Team teamMembers={teamMembers} /> */}

            <Job jobParameters={jobs} />
             <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
            <Footer />

            <BackToTop />
        </>
    );
};

export default Blog;