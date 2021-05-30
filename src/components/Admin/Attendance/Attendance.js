import React from 'react';
import './Attendance.css';
import {connect} from 'react-redux';

const Attendance = (props) => {
    const {employeeDetails} = props;
    let todayDate = new Date().toISOString().slice(0, 10);

    return (
        <div className="attendance-area">
            <h4 className="text-center">Attendance</h4>

            <div className="d-flex table-head justify-content-around">
                <p>Employee Name</p>
                <p>Present/Absent</p>
            </div>

            {
                employeeDetails.map(employee => 
                    <div className="d-flex table-info justify-content-around">
                        <p>{employee.name}</p>
                        <select name="stats" id="status">
                            <option value={employee.attendance}>{employee.attendance}</option>
                        </select>
                    </div>    
                )
            }

            <p className="date">Current Date: {todayDate}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        employeeDetails: state.employeeDetails
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);