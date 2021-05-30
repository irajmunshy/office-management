import React, {useState} from 'react';
import Management from './Management/Management';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Employee from './Employee/Employee';
import Attendance from './Attendance/Attendance';
import Fee from './Fee/Fee';
import { Link, useHistory } from 'react-router-dom';

const Admin = () => {
    const [pathSelected, setPathSelected] = useState('');
    const history = useHistory();

    const handleSidebar = (value) => {
        setPathSelected(value);
        history.push(`/admin/${value}`);
    }

    return (
        <div className="overflow-hidden">
            <nav className="admin-area px-5 py-3 d-flex bg-dark align-item-center text-white justify-content-between">
                <Link to="/"><h2>Office Management</h2></Link>

                <Link className="logout" to="/">Log Out</Link>
            </nav>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar handleSidebar={handleSidebar} />
                </div>

                <div className="col-md-9">
                    {
                        pathSelected == 'employee' ? <Employee /> :
                        pathSelected == 'management' ? <Management /> :
                        pathSelected == 'attendance' ? <Attendance /> :
                        pathSelected == 'fee' ? <Fee /> : <Dashboard />
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;