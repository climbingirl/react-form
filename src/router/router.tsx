import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import App from '../components/app/app';
import Home from '../pages/home/home';
import RegistrationBasic from '../pages/registrationBasic/registrationBasic';
import RegistrationHookForm from '../pages/registrationHookForm/registrationHookForm';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path={ROUTES.REGISTRATION_BASIC} element={<RegistrationBasic />}></Route>
      <Route
        path={ROUTES.REGISTRATION_HOOK_FORM}
        element={<RegistrationHookForm />}
      ></Route>
    </Route>
  )
);
