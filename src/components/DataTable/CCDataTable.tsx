import React, { useState } from 'react';
import DataTable, {
  ExpanderComponentProps,
  defaultThemes,
  createTheme,
  TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';
import { downloadCSV } from './utils/csvUtils';
import ExportButton from './components/ExportButton';
import sampleColumns from './data-sample/sampleColumn';
import sampleData from './data-sample/sampleData';
import sampleConditionalRowStyles from './data-sample/sampleConditionalRowStyles';


interface TableProps<T> {
  columns: any[];
  data: any[];
  title?: string;
  fixedHeader?: boolean;
  fixedHeaderScrollHeight?: string;
  conditionalRowStyles?: any[];
}

interface DataTableProps<T> {
  tableProps?: TableProps<T>;
  onSelectedRowsChange?: (selectedRows: any) => void;
}


const ExpandedComponent = <T,>({ data }: ExpanderComponentProps<T>) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const paginationComponentOptions = {
  rowsPerPageText: 'Rows Per Page',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'All',
};

createTheme(
  'default',
  {
    text: {
      primary: '#333E48',
      secondary: '#333E48',
    },
    background: {
      default: '#ffffff',
    },
    context: {
      background: '#0B7A6A',
      text: '#FFFFFF',
    },
  },
  'dark'
);

const customStyles : TableStyles = {
  header: {
    style: {
      minHeight: '2em',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderColor: '#0B7A6A',
      backgroundColor: '#0B7A6A',
      color: '#FFF',
    },
  },
  headCells: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  rows: {
    style: {
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: defaultThemes.default.divider.default,
      },
      '&:nth-child(even)': {
        backgroundColor: '#f3f4f6', // alternate background color for even rows
      },
      '&:nth-child(odd)': {
        backgroundColor: '#fff', // alternate background color for odd rows
      },
    },
  },
};


const CCDataTable: React.FC<DataTableProps<any>> = ({ tableProps = {}, onSelectedRowsChange }) => {
  const {
    columns = sampleColumns,
    data = sampleData,
    title = 'Data Table',
    fixedHeader = true,
    fixedHeaderScrollHeight = '40em',
    conditionalRowStyles = sampleConditionalRowStyles,
  } = tableProps as TableProps<any>

  const [selectedRows, setSelectedRows] = useState([]);



  const defaultHandleChange = (state : any) => {
    setSelectedRows(state.selectedRows);
  };

  const actionsMemo = React.useMemo(() => <ExportButton onExport={() => downloadCSV(data)} />, [data]);

  return (
    <>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'button'}>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={onSelectedRowsChange || defaultHandleChange}
        title={title}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        dense
        conditionalRowStyles={conditionalRowStyles}
        customStyles={customStyles}
        theme="default"
        actions={actionsMemo}
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight={fixedHeaderScrollHeight}
      />
      </StyleSheetManager>
    </>
  );
};

export default CCDataTable;


