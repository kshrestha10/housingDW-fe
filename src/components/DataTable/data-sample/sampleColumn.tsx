import { Link } from 'react-router-dom';

const sampleColumns = [
  {
    name: 'Title',
    selector: (row: { title: string }) => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: string }) => row.year,
    sortable: true,
  },
  {
    cell: (row: any) => (
      <>
        <Link to="#" className="delete-link" onClick={() => console.log('Delete clicked', row)}>
          Delete
        </Link>
      </>
    ),
    ignoreRowClick: true,
  },
];

export default sampleColumns;
