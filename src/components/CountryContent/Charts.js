import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Line } from 'react-chartjs-2';


const Charts = () => {
    const { slug } = useParams();

    const countryData = useSelector(state => state.country.countriesData)?.[slug] || [];

    // SORTING THE SAME AS IN TABLE
    const data = {
        labels: countryData.map(({ Date }) => Date),
        datasets: [
            {
                label: '# of Confirmed Cases',
                data: countryData.map(({ Confirmed }) => Confirmed),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: '# of Deaths',
                data: countryData.map(({ Deaths }) => Deaths),
                fill: false,
                backgroundColor: '#000',
                borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            {
                label: '# of Recovered',
                data: countryData.map(({ Recovered }) => Recovered),
                fill: false,
                backgroundColor: 'rgb(34,139,34)',
                borderColor: 'rgba(34,139,34, 0.2)',
            },
            {
                label: '# of Active',
                data: countryData.map(({ Active }) => Active),
                fill: false,
                backgroundColor: 'rgb(255, 255, 0)',
                borderColor: 'rgba(255, 255, 0, 0.2)',
            }
        ],
    };
      
    const newCasesData = {
        labels: countryData.map(({ Date }) => Date),
        datasets: [
            {
                label: '# of New Cases',
                data: countryData.map(({ NewCases }) => NewCases),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: '# of New Deaths',
                data: countryData.map(({ NewDeaths }) => NewDeaths),
                fill: false,
                backgroundColor: '#000',
                borderColor: 'rgba(0, 0, 0, 0.2)',
            }
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                }
            ],
        },
    };

    if (!countryData.length) return <h2>No Data</h2>;
    return (
        <div className="charts-wrap">
            <h1>Accumulated Chart</h1>
            <Line
                data={data}
                options={options}
            />
            <h1>Daily Chart</h1>
            <Line
                data={newCasesData}
                options={options}
            />
        </div>
    );
};

export default Charts;