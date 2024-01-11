import { useState } from "react";
import {
    signInUsingEmailAndPasswordAuthen,
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import FormInput from "../../form-input/form-input.component";
import './sign-In-form.style.scss';
import Button from "../../component/button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIN = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password,} = formFields;
    
    const resetFormFields = () => {
        // console.log(defaultFormFields);
        setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(password, "  ", confirmPassword, "  ", displayName);

        try {
            const response = await signInUsingEmailAndPasswordAuthen(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
            case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
            default:
                console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In With Email And Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                    </div>
            </form>
        </div>
    )
}

export default SignIN;