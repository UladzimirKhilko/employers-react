/* eslint-disable react/react-in-jsx-scope */
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css'


function App() {

    const data = [
        {name: 'John S.' ,salary: 800, increase: false, id:1},
        {name: 'Alex M.' ,salary: 3000, increase: true, id:2},
        {name: 'Carl W.' ,salary: 5000, increase: false, id:3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;