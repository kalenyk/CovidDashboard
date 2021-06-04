import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { getCountryData } from '../../redux/actions';


import Table from '../../components/CountryContent/Table';
import Charts from '../../components/CountryContent/Charts';

const App = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    const [isShowTable, setIsShowTable] = useState(true);

    useEffect(() => {
        dispatch(getCountryData({ slug }));
    }, [dispatch, slug]);

    const toggleView = useCallback(() => {
        setIsShowTable(prevState => !prevState);
    },[]);

    return (
        <main>
            <div className="button-wrap">
                <Button onClick={toggleView}>Toggle View</Button>
            </div>
            {isShowTable ? <Table /> : <Charts />}
        </main>
    );
};

export default App;