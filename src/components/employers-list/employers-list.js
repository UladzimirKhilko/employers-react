/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css'

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
           <EmployersListItem {...item}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;