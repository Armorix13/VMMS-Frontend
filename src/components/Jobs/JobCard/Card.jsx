import axios from "axios";
import React, { useState } from "react";
import JobModal from "../../Modal/ApplyForm"; // Adjust path as needed
import { appJobAPi, applyJobAPi } from "../../../constant/api";
import { toast } from "react-toastify";

const JobCard = ({ job }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const openModal = (job) => {
    setIsOpen(true);
    setSelectedJob(job._id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJob("");
  };

  const formFields = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter your name",
    },
    {
      label: "Phone",
      type: "phone",
      name: "phone",
      placeholder: "Enter your phone",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
  ];

  const onSubmit = async (formValues) => {
    try {
      const res = await axios.post(appJobAPi, {
        postJobId: selectedJob,
        name: formValues.name,
        email: formValues.email,
        phoneNumber: formValues.phone,
        resumeLink: formValues.resume,
      });
      if (res) {
        toast.success("Job Application submitted");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting application.");
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded p-4 w-full max-w-md">
        <h2 className="text-lg font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.description}</p>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-bold">Skills:</span> {job.skills}
          </li>
          <li>
            <span className="font-bold">Salary:</span> {job.salary}
          </li>
          <li>
            <span className="font-bold">Location:</span> {job.location}
          </li>
          <li>
            <span className="font-bold">Qualification:</span>{" "}
            {job.qualification}
          </li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => openModal(job)}
        >
          Apply
        </button>
      </div>
      {modalIsOpen && (
        <JobModal
          closeModal={closeModal}
          formFields={formFields}
          onSubmit={onSubmit}
          applyJobAPi={applyJobAPi}
        />
      )}
    </>
  );
};

export default JobCard;
