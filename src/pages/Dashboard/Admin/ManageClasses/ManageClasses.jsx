import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import { Link } from 'react-router-dom';
import useClasses from '../../../../hooks/useClasses';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageClasses = () => {
  const [courses, loading, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackButtonDisabled, setFeedbackButtonDisabled] = useState(true);
  const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);
  const [denyButtonDisabled, setDenyButtonDisabled] = useState(false);

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.patch(`/courses/${classId}`, { status: 'approved' });
      refetch();
      setApproveButtonDisabled(true); // Disable the Approve button after approving
      setDenyButtonDisabled(true); // Disable the Deny button after approving
    } catch (error) {
      console.error('Failed to update class status:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axiosSecure.patch(`/courses/${classId}`, { status: 'denied' });
      refetch();
      setFeedbackButtonDisabled(false); // Enable the Feedback button when denied
      setApproveButtonDisabled(true); // Disable the Approve button when denied
      setDenyButtonDisabled(true); // Disable the Deny button when denied
    } catch (error) {
      console.error('Failed to update class status:', error);
    }
  };

  const handleOpenFeedbackModal = (classData) => {
    setSelectedClass(classData);
    setFeedbackModalOpen(true);
  };

  const handleCloseFeedbackModal = () => {
    setSelectedClass(null);
    setFeedbackMessage('');
    setFeedbackModalOpen(false);
  };

  const handleSubmitFeedback = async () => {
    try {
      await axiosSecure.post(`/courses/${selectedClass._id}/feedback`, { message: feedbackMessage });
      handleCloseFeedbackModal();
    } catch (error) {
      console.error('Failed to send feedback:', error);
    }
  };

  return (
    <div className="w-full">
      <SectionHeader
        heading="Manage All Items"
        tagline="Do not panic, you can update your classes"
      />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="11" className="text-center">Loading...</td>
              </tr>
            ) : (
              courses.map((classItem, index) => (
                <tr key={classItem._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classItem.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{classItem.class_name}</td>
                  <td>{classItem.instructor_name}</td>
                  <td>{classItem.instructor_email}</td>
                  <td>{classItem.available_seats}</td>
                  <td>${classItem.price}</td>
                  <td>{classItem.status}</td>
                  <td>
                    <button
                      className="btn btn-accent text-white btn-xs"
                      onClick={() => handleApprove(classItem._id)}
                      disabled={classItem.status !== 'pending' || approveButtonDisabled}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn bg-red-600 text-white btn-xs"
                      onClick={() => handleDeny(classItem._id)}
                      disabled={classItem.status !== 'pending' || denyButtonDisabled}
                    >
                      Deny
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-xs"
                      onClick={() => handleOpenFeedbackModal(classItem)}
                      disabled={
                        classItem.status === 'pending' ||
                        classItem.status === 'approved' ||
                        feedbackButtonDisabled
                      }
                    >
                      Feedback
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Feedback Modal */}
      {feedbackModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Send Feedback</h2>
            <p>Class: {selectedClass && selectedClass.class_name}</p>
            <textarea
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              placeholder="Write your feedback..."
            ></textarea>
            <div className="modal-buttons">
              <button className="btn" onClick={handleCloseFeedbackModal}>
                Cancel
              </button>
              {selectedClass && (
                <button className="btn btn-accent" onClick={handleSubmitFeedback}>
                  Send Feedback
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;

