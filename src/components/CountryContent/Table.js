import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TableBootstrap from 'react-bootstrap/Table'; 

const Table = () => {
    const { slug } = useParams();

    const countryData = useSelector(state => state.country.countriesData)?.[slug] || [];

    return (
        <div className="table-wrap">
            <TableBootstrap striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed Cases</th>
                        <th>New Cases</th>
                        <th>Deaths</th>
                        <th>New Deaths</th>
                        <th>Active Cases</th>
                        <th>Recovered Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {countryData.map(item => (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.NewCases}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.NewDeaths}</td>
                            <td>{item.Active}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    ))}
                </tbody>
            </TableBootstrap>
        </div>
    );
};

export default Table;