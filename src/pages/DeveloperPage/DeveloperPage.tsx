import { useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layouts/DefaultLayout';
import { CreateToast, ToastProvider } from '../../components/common/hooks/fireToast'; // Import createToast and ToastProvider
import CCDataTable from '../../components/DataTable/CCDataTable';
import { Link } from 'react-router-dom';

const DeveloperPage = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const handleChange = (state) => {
        setSelectedRows(state.selectedRows);
    };
    const handleButtonClick = () => {
      CreateToast('Success!', 'This is a success message', 0);
    };
  
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Developer Page" />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fire Toast Message
        </button>
        <ToastProvider /> {/* Include the Toaster component */}

        {/* <CCDataTable /> */}
      <CCDataTable tableProps={tableProps} onSelectedRowsChange={handleChange} />
      <CCDataTable tableProps={tableProps} onSelectedRowsChange={handleChange} />
      </DefaultLayout>
    );
  };
  
  export default DeveloperPage;

  
const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
    },
  
    {
      cell: (row) => (
        <>
          <Link
            to="#"
            className="m-1 inline-flex items-center justify-center bg-meta-3 py-2 px-4 text-xs text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-3"
            style={{ minWidth: '2rem', whiteSpace: 'nowrap' }}
            onClick={() => console.log('test', row)}
          >
            Delete
          </Link>
          <Link
            to="#"
            className="m-1 inline-flex items-center justify-center bg-meta-3 py-2 px-4 text-xs text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-3"
            style={{ minWidth: '2rem', whiteSpace: 'nowrap' }}
            onClick={() => console.log('test', row)}
          >
            Delete
          </Link>
        </>
      ),
      ignoreRowClick: true,
    },
  ];
  
  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1989',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1989',
    },
    {
      id: 11,
      title: 'Beetlejuice',
      year: '1989',
    },
    {
      id: 21,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 12,
      title: 'Beetlejuice',
      year: '1989',
    },
    {
      id: 22,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 13,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 23,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 14,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 24,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 15,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 25,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 16,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 26,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 17,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 27,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 18,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 28,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 19,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 29,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 10,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 20,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 111,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 211,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 112,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 212,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 113,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 213,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 114,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 214,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 115,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];
  
  const rowStyleConditions = [{
    when: (row: any) => row.year == 1988,
    style: {
      backgroundColor: '#56A196 !important',
      color: '#FFF',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },];
  
  const tableProps = {
    columns: columns,
    data: data,
    title: 'File Transfer',
    conditionalRowStyles : rowStyleConditions
  };
  