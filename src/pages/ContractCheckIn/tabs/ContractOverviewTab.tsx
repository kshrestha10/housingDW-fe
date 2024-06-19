// ContractOverviewTab.js
const ContractOverviewTab = ({ isActive, onClick }) => (
  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
    <a
      className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
        isActive ? "text-white bg-primary" : "bg-white"
      }`}
      onClick={onClick}
      // href="#link1"
    >
      Contract Overview
    </a>
  </li>
);
export default ContractOverviewTab;


export const ContractOverviewContent = () => {
    
  const tableData = [
    {
      mainHeader: { label: 'Main Contract Overview', className: 'bg-primary text-white' },
      subheadings: [
        { label: 'Enrollment and Capacity', colSpan: 4, className: 'bg-blue-200 text-center', inlineStyle: { backgroundColor: '#5089C7' } },
        { label: 'Housing Placements/Exits', colSpan: 2, className: 'bg-blue-200 text-center', inlineStyle: { backgroundColor: '#E6C0BA' } },
        { label: 'Data Quality and Case Notes', colSpan: 4, className: 'bg-blue-200 text-center', inlineStyle: { backgroundColor: '#AFD1A9' } },
        { label: 'CHA Referrals', colSpan: 8, className: 'bg-blue-200 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } }
      ],
      headers: [
        { label: 'Contract Capacity', scope: 'col', className: 'bg-primary', inlineStyle: { backgroundColor: '#5089C7' } },
        { label: 'HH Enrolled at Period End', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#5089C7' } },
        { label: 'Progress (%)', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#5089C7' } },
        { label: 'Avg Days Enrolled for those unhoused', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#5089C7' } },
        { label: 'HH Served at Period End', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E6C0BA' } },
        { label: 'Exits to PH', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E6C0BA' } },
        { label: 'UDE Quality (%)', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#AFD1A9' } },
        { label: 'Avg Days for Program Entries Column (AN) Reverse E.Sum Tab', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#AFD1A9' } },
        { label: '% of Program Entries Entered w/in 3 days', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#AFD1A9' } },
        { label: '% of HH w/at least 1 ST/month', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#AFD1A9' } },
        { label: '# of CHA Referrals Received', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: '# CHA Referrals Accepted', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: 'Avg Days to Accept or Contact Referrals', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: '% Accepted or Contacted w/in "X" Days', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: 'Assessment (Annual) Completion %', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: 'Income Increase % - Stayers', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: 'Income Increase % - Leavers', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } },
        { label: '(6-Month follow-up) Housing Programs OHCS report) Assessment Completion %', scope: 'col', className: 'bg-blue-300 text-center', inlineStyle: { backgroundColor: '#E3BAD9' } }
      ],
      rows: [
        { category: 'Outreach', data: [50000, 30000, 10000, 2000, 80000, 60000, 25000, 5000, 120000, 90000, 40000, 8000, 150000, 120000, 80000, 15000, 15000, 15000] },
        { category: 'Shelter', data: [10000, 5000, 2000, 500, 12000, 9000, 4000, 1000, 15000, 10000, 5000, 1500, 18000, 15000, 6000, 2000, 15000, 15000] },
        { category: 'Navigation/Placement', data: [10000, 5000, 2000, 500, 12000, 9000, 4000, 1000, 15000, 10000, 5000, 1500, 18000, 15000, 6000, 2000, 15000, 15000] },
        { category: 'RRH', data: [10000, 5000, 2000, 500, 12000, 9000, 4000, 1000, 15000, 10000, 5000, 1500, 18000, 15000, 6000, 2000, 15000, 15000] },
        { category: 'Supportive Housing Case Management', data: [10000, 5000, 2000, 500, 12000, 9000, 4000, 1000, 15000, 10000, 5000, 1500, 18000, 15000, 6000, 2000, 15000, 15000] },
        { category: 'Eviction Prevention', data: [10000, 5000, 2000, 500, 12000, 9000, 4000, 1000, 15000, 10000, 5000, 1500, 18000, 15000, 6000, 2000, 15000, 15000] }
      ]
    }
  ];

  return (
    <div id="link1">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-x divide-gray-200">
          {/* Main Header Row */}
          <thead className="bg-gray-50">
            <tr>
              <th className={`sticky left-0 px-6 py-3 ${tableData[0].mainHeader.className}`} style={tableData[0].mainHeader.inlineStyle} rowSpan="2">{tableData[0].mainHeader.label}</th>
              {/* Render subheaders */}
              {tableData[0].subheadings.map((subheading, index) => (
                <th key={index} className={`px-6 py-3 ${subheading.className}`} style={subheading.inlineStyle} colSpan={subheading.colSpan} scope="colgroup">{subheading.label}</th>
              ))}
            </tr>
            {/* Secondary Header Row */}
            <tr className="bg-gray-100">
              {/* Render headers */}
              {tableData[0].headers.map((header, index) => (
                <th key={index} className={`px-6 py-3 ${header.className}`} style={header.inlineStyle} scope={header.scope}>{header.label}</th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Render rows */}
            {tableData[0].rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th className={`sticky left-0 px-6 py-4 whitespace-no-wrap ${row.category === 'Outreach' || row.category === 'Shelter' ? 'bg-yellow-200' : 'bg-yellow-100'} text-left border-r border-gray-200`} style={{ backgroundColor: row.category === 'Outreach' || row.category === 'Shelter' ? '#FFECB3' : '#FFFDE7' }}>{row.category}</th>
                {/* Render data cells */}
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-no-wrap text-center border-r border-gray-200">{cell.toLocaleString()}</td>
                ))}
              </tr>
            ))}
          {/* Total Row (placeholder) */}
          <tr>
            <td className="sticky left-0 px-6 py-4 whitespace-no-wrap bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Total</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">70,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">35,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">15,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">7,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">132,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">95,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">42,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">6,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">258,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">210,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">105,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">23,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">345,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">270,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">140,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">17,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">17,000</td>
            <td className="px-6 py-4 whitespace-no-wrap bg-gray-50 border-r border-gray-200">17,000</td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
    );
  };
  
