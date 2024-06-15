import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";

const JobModal = ({ closeModal, formFields, onSubmit, applyJobAPi }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url) {
      toast.error("Please upload your resume first.");
      return;
    }
    await onSubmit({ ...formValues, resume: url });
    setFormValues({
      name: "",
      email: "",
      phone: "",
      resume: "",
    });
    closeModal();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    handleFileUpload(selectedFile);
  };

  const handleFileUpload = async (selectedFile) => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(applyJobAPi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setUrl(response.data.url);
        toast.success("File uploaded successfully.");
      } else {
        toast.error("Error while uploading file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file.");
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <button
        onClick={closeModal}
        className="absolute top-0 right-0 mt-2 mr-4 mb-2"
      >
        X
      </button>
      <h3 className="text-3xl font-bold mb-4">Job Application Form</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <label key={index} className="block">
            <span className="text-gray-700">{field.label}:</span>
            <input
              type={field.type}
              name={field.name}
              className="w-full p-2 pl-10 text-gray-700"
              placeholder={field.placeholder}
              value={formValues[field.name]}
              onChange={handleFormChange}
            />
          </label>
        ))}
        <label className="block">
          <span className="text-gray-700">Resume:</span>
          <input
            type="file"
            name="resume"
            className="w-full p-2 pl-10 text-gray-700"
            onChange={handleFileChange}
          />
        </label>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default JobModal;
