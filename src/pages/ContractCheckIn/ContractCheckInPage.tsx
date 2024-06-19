import Breadcrumb from '../../components/common/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layouts/DefaultLayout';
import FormElements from './FormElements';
import TabsRender from './TabsRender';

const ContractCheckInPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Contract Check In" />
      <FormElements/>
      <TabsRender/>
    </DefaultLayout>
  );
};

export default ContractCheckInPage;
