import  { useState } from 'react';

import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useClasses from '../../../../hooks/useClasses';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ManageClasses = () => {
  const [courses, loading, refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackButtonDisabled, setFeedbackButtonDisabled] = useState(true);
  const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);
  const [denyButtonDisabled, setDenyButtonDisabled] = useState(false);

  const handleApprove = async (classId) => {
    try {
      await axiosSecure.patch(`/courses/${classId}`, { operation: 'approve' });
      refetch();
      setApproveButtonDisabled(true);
      setDenyButtonDisabled(true);
      setFeedbackButtonDisabled(true);
    } catch (error) {
      console.error('Failed to update class:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axiosSecure.patch(`/courses/${classId}`, { operation: 'deny' });
      refetch();
      setFeedbackButtonDisabled(false);
      setApproveButtonDisabled(true);
      setDenyButtonDisabled(true);
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
      <SectionHeader heading="Manage All Classes" tagline="Hey, You have the power to manage classes"  />
      <div className="overflow-x-auto w-full bg-slate-100">
        <table className="table w-full">
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
     

      {/* Feedback modal */}
      <Modal isOpen={feedbackModalOpen} onRequestClose={handleCloseFeedbackModal}>
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
      </Modal>
    </div>
  );
};

export default ManageClasses;
