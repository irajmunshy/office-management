import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import './Management.css';

const Management = (props) => {
    const {managementInfo} = props;

    return (
        <div className="dashboard-area text-white">
            <div className="cards">
                <div className="row">
                    {
                        managementInfo.map(info =>
                            <div className="col-md-3">
                                <div style={{ backgroundColor: info.bg }} className="single-card">
                                    <div className="title">
                                        <h5>{info.title}</h5>
                                    </div>
                                    <div className="manager-info">
                                        <div className="manager-icon">
                                            <FontAwesomeIcon style={{ fontSize: '25px' }} icon={info.icon} />
                                        </div>
                                        <div className="manager-count text-end">
                                            <h5>{info.value}</h5>
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
        managementInfo: state.managementInfo
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Management);