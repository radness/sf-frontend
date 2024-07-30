import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';
import {useState} from "react";

export const Searchbar = ({setResults} : {setResults:any}) => {
    const [input, setInput] = useState('');

    const fetchData = (value: any) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(json => {
                // console.log(json);
                const results = json.filter((user: any) => {
                   return (value &&
                       user &&
                       user.name &&
                       user.name.toLowerCase().includes(value)
                   );
                });
                // console.log(results);
                setResults(results);
            });
    }

    const handleChange = (value: any) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' className='search-bar' />
            <input placeholder='Type to search...'
                   value={input}
                   onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};