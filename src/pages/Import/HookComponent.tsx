import React, { useMemo, useState, useCallback, useEffect } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const sampleData = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
];

export const HookComponent = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        console.log('state', selectedRows);
    }, [selectedRows]);

    const handleButtonClick = () => {
        console.log('clicked');
    };

    const handleChange = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const columns = useMemo(() => [
        {
            cell: () => <Button onClick={handleButtonClick}>Action</Button>,
            ignoreRowClick: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ], []);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'button'}>
            <DataTable
                title="Desserts"
                data={sampleData}
                columns={columns}
                selectableRows
                onSelectedRowsChange={handleChange}
            />
        </StyleSheetManager>
    );
};

export default HookComponent;



// Styled button component with Tailwind CSS
const Button = styled.button`
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #ffffff;
    background-color: #3b82f6;
    border-color: #2563eb;
    &:hover {
        background-color: #2563eb;
    }
    &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }
    &:active {
        background-color: #2563eb;
    }
`;
