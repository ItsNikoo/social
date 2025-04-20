import {signIn} from '@/auth'
import styles from "./SignInWithGoogle.module.css"

export function SignInWithGoogle() {
    return (
        <form action={async () => {
            'use server'
            await signIn('google', {redirectTo: "/"})
        }}>
            <button
                className={styles.signInWithGoogle}
                type='submit'>Sign in with Google
            </button>
        </form>
    )
}