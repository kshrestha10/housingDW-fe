import React, { useState } from "react";
import ContractOverviewTab, { ContractOverviewContent } from "./tabs/ContractOverviewTab";
import OutcomeDataTab, { OutcomeDataContent } from "./tabs/OutcomeDataTab";
import StaffingTab, { StaffingContent } from "./tabs/StaffingTab";
import BudgetTab, { BudgetContent } from "./tabs/BudgetTab";
import FileMonitoringTab, { FileMonitoringContent } from "./tabs/FileMonitoringTab";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <ContractOverviewTab isActive={openTab === 1} onClick={() => setOpenTab(1)} />
          <OutcomeDataTab isActive={openTab === 2} onClick={() => setOpenTab(2)} />
          <StaffingTab isActive={openTab === 3} onClick={() => setOpenTab(3)} />
          <BudgetTab isActive={openTab === 4} onClick={() => setOpenTab(4)} />
          <FileMonitoringTab isActive={openTab === 5} onClick={() => setOpenTab(5)} />
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {openTab === 1 && <ContractOverviewContent />}
              {openTab === 2 && <OutcomeDataContent />}
              {openTab === 3 && <StaffingContent />}
              {openTab === 4 && <BudgetContent />}
              {openTab === 5 && <FileMonitoringContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabsRender = () => {
  return <Tabs />;
};

export default TabsRender;