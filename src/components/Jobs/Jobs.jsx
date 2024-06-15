import React, { useState, useEffect } from "react";
import JobCard from "./JobCard/Card";
import axios from "axios";
import { getAllJob } from "../../constant/api";

const Jobs = () => {
  const [jobs, setJob] = useState([]);

  const getallJobs = async () => {
    try {
      const res = await axios.get(getAllJob);
      if (res.data) {
        setJob(res?.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getallJobs();
  }, []);
  console.log(jobs);
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Array.isArray(jobs) && jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default Jobs;
