import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';

const Dashboard = (props) => {
    const {dashboardInfo} = props;

    return (
        <div className="dashboard-area text-white">
            <div className="cards">
                <div className="row">
                    {
                        dashboardInfo.map(info =>
                            <div className="col-md-3">
                                <div style={{ backgroundColor: info.bg }} className="single-card">
                                    <h5 className="title">{info.title}</h5>

                                    <div className="manager-info">
                                        <div className="manager-icon">
                                            <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserTie} />
                                        </div>
                                        <div className="manager-count text-end">
                                            <h1>{info.staff}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        dashboardInfo: state.dashboardInfo
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);