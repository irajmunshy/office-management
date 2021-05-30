import React from 'react';
import './Employee.css';
import {connect} from 'react-redux';

const Employee = (props) => {
    const {employeeInfo} = props;

    return (
        <div className="employee-area">
            <h4 className="text-center">Employee Information</h4>

            <div className="d-flex table-head justify-content-around">
                <p>Name</p>
                <p>Phone</p>
                <p>Join Date</p>
                <p>Salary</p>
            </div>

            {
                employeeInfo.map(info => 
                    <div className="d-flex table-info justify-content-around">
                        <p>{info.name}</p>
                        <p>{info.phone}</p>
                        <p>{info.joinDate}</p>
                        <p>{info.salary}</p>
                    </div>
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        employeeInfo: state.employeeInfo
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);