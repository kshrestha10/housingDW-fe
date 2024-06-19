import { Route, Routes } from 'react-router-dom';

import PageTitle from '../components/common/PageTitle/PageTitle';
import BlankPage from '../pages/BlankPage/BlankPage';
import PageNotFoundPage from '../pages/ErrorPage/404';
import OverviewPage from '../pages/Overview/OverviewPage';
import SignUp from '../pages/Authentication/SignUp';
import SignIn from '../pages/Authentication/SignIn';
import FileTransfer from '../pages/Import/FileTransfer';
import DeveloperPage from '../pages/DeveloperPage/DeveloperPage';
import ContractCheckInPage from '../pages/ContractCheckIn/ContractCheckInPage';

function PageRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Home | CHDW" />
              <OverviewPage />
            </>
          }
        />
        <Route
          path="/contract-check-in"
          element={
            <>
              <PageTitle title="Contract Check In | CHDW" />
              <ContractCheckInPage />
            </>
          }
        />
        <Route
          path="/blank"
          element={
            <>
              <PageTitle title="Blank Page | CHDW" />
              <BlankPage />
            </>
          }
        />
        <Route
          path="/developer-mode"
          element={
            <>
              <PageTitle title="Blank Page | CHDW" />
              <DeveloperPage />
            </>
          }
        />

        {/* Import */}
        <Route
          path="/import/file-transfer"
          element={
            <>
              <PageTitle title="File Transfer | CHDW" />
              <FileTransfer />
            </>
          }
        />

        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Sign Up | CHDW" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Sign In | CHDW" />
              <SignIn />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 | CHDW" />
              <PageNotFoundPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default PageRoutes;
