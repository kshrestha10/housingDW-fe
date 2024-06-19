import React, { useState } from 'react';

const FormElements = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };
    const [accordionOpen, setAccordionOpen] = useState(false);
  
  // Function to toggle accordion
  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      {/* Filter Section */}
      <div className="flex flex-col gap-6">
        {/* Accordion Header */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div
            className="border-b border-stroke py-3 px-4.5 dark:border-strokedark cursor-pointer"
            onClick={toggleAccordion}
          >
            <h3 className="font-medium text-black dark:text-white">Filter</h3>
          </div>
          {/* Accordion Content */}
          {accordionOpen && (
            <div className="flex flex-col gap-4 p-4.5">
              <div className="relative z-20 bg-white dark:bg-form-input">
                <select
                  className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                    isOptionSelected ? 'text-black dark:text-white' : ''
                  }`}
                >
                  <option value="" disabled className="text-body dark:text-bodydark">
                    Select Provider
                  </option>
                  <option value="Provider 1" className="text-body dark:text-bodydark">
                    Provider 1
                  </option>
                  <option value="Provider 2" className="text-body dark:text-bodydark">
                    Provider 2
                  </option>
                  <option value="Provider 3" className="text-body dark:text-bodydark">
                    Provider 3
                  </option>
                </select>
                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    />
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex gap-6">
        <div className="flex flex-col flex-grow gap-4">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-3 px-4.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Details</h3>
            </div>
            <div className="p-4.5 space-y-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black dark:text-white" htmlFor="ProviderName">
                  Provider Name
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray-100 px-3 py-2 font-small text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="ProviderName"
                  id="ProviderName"
                  placeholder="Provider 1"
                  value="Provider 1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black dark:text-white" htmlFor="ContractNumber">
                  Contract #
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray-100 px-3 py-2 font-small text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="ContractNumber"
                  id="ContractNumber"
                  placeholder="ContractNumber"
                  value="CC23094u213"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black dark:text-white" htmlFor="PONumber">
                  PO #
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray-100 px-3 py-2 font-small text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="PONumber"
                  id="PONumber"
                  placeholder="PONumber"
                  value="POe298543"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElements;
