import { useState } from "react";
import {
    signInUsingEmailAndPasswordAuthen,
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import FormInput from "../../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES} from "../../component/button/button.component";
import { ButtonsContainer, SignInContainer } from "./sign-In-form.style";
// import { UserContext } from "../../contexts/user.contexts";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIN = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password,} = formFields;
    
    // const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        // console.log(defaultFormFields);
        setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        // setCurrentUser(user);
        // createUserDocumentFromAuth(user);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(password, "  ", confirmPassword, "  ", displayName);

        try {
            const {user} = await signInUsingEmailAndPasswordAuthen(email, password);
            // console.log(response);
            // setCurrentUser(user);
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
        <SignInContainer>
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

                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIN;