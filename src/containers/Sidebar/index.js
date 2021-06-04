import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup,FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getCountriesList } from '../../redux/actions';


const Sidebar = () => {
    const dispatch = useDispatch();
    const countriesList = useSelector(state => state.country.countriesList);

    const [filterValue, setFilterValue] = useState('');
        
    const setInputValue = useCallback((e) => setFilterValue(e.target.value),[])
    const resetFilter = useCallback(() => setFilterValue(''), []);

    const filteredCountries = useMemo(() => {
        if(!filterValue) return countriesList;
        return countriesList.filter(item => item.Country.toLowerCase().includes(filterValue.toLowerCase()))
    }, [filterValue, countriesList]);

    useEffect(() => {
        dispatch(getCountriesList());
    }, [dispatch]);

    return (
        <aside className="sidebar">
            <InputGroup className="mb-3">
                <FormControl
                    aria-label="Countries filter"
                    aria-describedby="basic-addon1"
                    onChange={setInputValue}
                />
                <Button onClick={resetFilter} disabled={!filterValue}>x</Button>
            </InputGroup>
            {filteredCountries.map(item => (
                <Link
                    to={`/country/${item.Slug}`}
                    key={item.Slug}
                >{item.Country}</Link>
            ))}
        </aside>
    );
};

export default Sidebar;