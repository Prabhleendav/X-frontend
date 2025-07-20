import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import './assignmentTable.css';
import search from '../icons/search.png';

function AssignmentTable() {
  return (
    <div className="assignment-section">
      <div className="assignment-header">
        <h3>Assignments</h3>
        <div className="search-wrapper">
          <img src={search} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Search by Subject" />
        </div>
      </div>

      <div className="assignment-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Assignments</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Submit Assignment</td>
              <td>UI/UX</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Complete Landing Page</td>
              <td>Web Dev</td>
              <td>12 May 2024</td>
              <td><span className="status not-started">Not Started</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Write Report</td>
              <td>Project</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Assignment 2</td>
              <td>Data Science</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Complete Problem Set #5</td>
              <td>Data Structure</td>
              <td>12 May 2024</td>
              <td><span className="status not-started">Not Started</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Write</td>
              <td>Python</td>
              <td>12 May 2024</td>
              <td><span className="status in-progress">In Progress</span></td>
              <td>
                <FaPen className="action-icon" />
                <FaTrash className="action-icon" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination">
          <button>Previous</button>
          <span>Page 1 of 12</span>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentTable;
