import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import DashboardCss from  './Fee.css';

const Fee = (props) => {
    const {salarys} = props;

    return (
        <div className="dashboard-area text-white">
            <div className="cards mt-5">
                <div className="row">
                    {
                        salarys.map(salary => 
                            <div className="col-md-3">
                                <div style={{ backgroundColor: salary.bg }} className="salary-info">
                                    <h5>{salary.position}</h5>

                                    <div className="manager-info">
                                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMoneyBillWave} />
                                        <h4>${salary.salary}</h4>
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
        salarys: state.salarys
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Fee);