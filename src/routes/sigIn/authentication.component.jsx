import SignUp from '../../component/sign-up-form/sign-up-form.component';
import SignIN from '../sign-in-form/sign-In-form.component';
import { AuthenticationContainer } from './authentication.style';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIN />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;