const sampleConditionalRowStyles = [
  {
    when: (row: any) => row.year == 1988,
    style: {
      backgroundColor: '#56A196 !important',
      color: '#FFF',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
];

export default sampleConditionalRowStyles;
