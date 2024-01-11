import SignUp from '../../component/sign-up-form/sign-up-form.component';
import SignIN from '../sign-in-form/sign-In-form.component';
import './authentication.style.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIN />
      <SignUp />
    </div>
  );
};

export default Authentication;