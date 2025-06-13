import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from '../components/Card';

const AddJob = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success("Successfully add new jobs");
    //Navigate to Jobs Page
    return navigate("/jobs");
  };
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <Card>
          <form onSubmit={submitForm}>
            <h2 className="text-4xl text-center font-bold mb-8 text-gray-800">
              Add New Job
            </h2>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                placeholder="e.g. Senior React Developer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                rows="4"
                placeholder="Job description, requirements, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="Over $100K">Over $100K</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                placeholder="Company Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Company Info
            </h3>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                placeholder="Email for applicants"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 focus:border-purple-500 focus:outline-none"
                placeholder="Phone number (optional)"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg w-full transition-all duration-300 shadow-lg hover:shadow-xl"
              type="submit"
            >
              Add Job
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddJob;
