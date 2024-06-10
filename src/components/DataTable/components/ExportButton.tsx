import React from 'react';
import { Link } from 'react-router-dom';

interface ExportButtonProps {
  onExport: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => (
  <Link
    to="#"
    className="inline-flex items-center justify-center bg-meta-3 py-2 px-8 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    onClick={onExport}
  >
    Export to CSV
  </Link>
);

export default ExportButton;
