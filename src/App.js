import { useState } from 'react';
import './App.css';
import Information from './info-json';

const App = () => {
    const [search, setSearch] = useState(null);

    const styleInfo = {
        paddingRight:'10px'
    };

    const elementStyle ={
        border:'solid',
        borderRadius:'10px',
        position:'relative',
        left:'10vh',
        height:'3vh',
        width:'20vh',
        marginTop:'5vh',
        marginBottom:'10vh'
    };

    const filtered = Information.filter((data) => {
        if (search == null) {
            return data
        }
        return (
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.country.toLowerCase().includes(search.toLowerCase()))
    });

    const items = filtered.map((data, index) => (
        <>
            <ul>
                <li key={index} style={{position:'relative',left:'10vh'}}>
                    <span style={styleInfo}>{data.name}</span>
                    <span style={styleInfo}>{data.age}</span>
                    <span style={styleInfo}>{data.country}</span>
                </li>
            </ul>
        </>
    ));

    return (
        <>
            <input
                type="text"
                placeholder="Enter item to be searched"
                style={elementStyle}
                onChange={(event) => setSearch(event.target.value)}
            />
            {items}
        </>
    )
}

export default App;