import { faCalendarAlt, faMobileAlt, faMoneyBillWave, faUserTie } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    employeeDetails: [
        {
            name: 'Milon Khan',
            attendance : 'Present'
        },
        {
            name: 'Pintu Khan',
            attendance : 'Absent'
        },
        {
            name: 'Mohan Khan',
            attendance : 'Present'
        },
        {
            name: 'Jobbar Khan',
            attendance : 'Present'
        },
        {
            name: 'Dalower Khan',
            attendance : 'Present'
        },
    ],
    employeeInfo: [
        {
            name: 'Milon Khan',
            joinDate: '27 June 2021',
            phone: 483537024239,
            salary: 3833
        },
        {
            name: 'Pintu Khan',
            joinDate: '21 December 2021',
            phone: 443337024239,
            salary: 4473
        },
        {
            name: 'Mohan Khan',
            joinDate: '23 June 2021',
            phone: 345353535626,
            salary: 3432
        },
        {
            name: 'Jobbar Khan',
            joinDate: '13 May 2017',
            phone: 538289228348,
            salary: 9557
        },
        {
            name: 'Dalower Khan',
            joinDate: '3 April 2020',
            phone: 353094839344,
            salary: 8384
        },
    ],
    infos: [
        {
            img: 'https://i.pinimg.com/originals/b3/cc/f6/b3ccf649605bfc63aeb1aeaf109f53df.jpg',
            title: 'Admin'
        },
        {
            img: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            title: 'Employee'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiujqAkR9SLuzkJlcAecyy3xLgB8TuAY4WzJjqh4u-J0zLL9WeMY_F3EWZKlHBM4PfJCA&usqp=CAU',
            title: 'Management'
        },
    ],
    salarys: [
        {
            position: 'Total Manager Salary',
            salary: 100000,
            bg: '#50A2FF'
        },
        {
            position: 'Manager Due Salary',
            salary: 50000,
            bg: '#43DCBD'
        },
        {
            position: 'Total Employee Salary',
            salary: 100000,
            bg: '#FF738A'
        },
        {
            position: 'Employee Due Salary',
            salary: 50000,
            bg: '#FFC167'
        },
    ],
    dashboardInfo: [
        {
            title: 'Total Manager',
            staff: 5,
            bg: '#50A2FF'
        },
        {
            title: 'Total Staff',
            staff: 8,
            bg: '#43DCBD'
        },
        {
            title: 'Total Employee',
            staff: 30,
            bg: '#FF738A'
        },
        {
            title: 'Total Client',
            staff: 20,
            bg: '#FFC167'
        },
    ],
    managementInfo: [
        {
            title: 'Name',
            icon: faUserTie,
            bg: '#50A2FF',
            value: 'Mr.Alex'
        },
        {
            title: 'Mobile',
            icon: faMobileAlt,
            bg: '#43DCBD',
            value: '+43984388344'
        },
        {
            title: 'Join Date',
            icon: faCalendarAlt,
            bg: '#FF738A',
            value: '01-Oct-2020'
        },
        {
            title: 'Salary',
            icon: faMoneyBillWave,
            bg: '#FFC167',
            value: '$23837'
        },
    ]
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

