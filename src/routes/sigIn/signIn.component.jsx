import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>I am on Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google pop up
            </button>
        </div>
    )
}

export default SignIn;