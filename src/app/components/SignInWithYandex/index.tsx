import {signIn} from "@/auth";
import styles from "./SigInWithYandex.module.css"

export function SignInWithYandex() {
    return (
        <form action={async () => {
            'use server'
            await signIn('yandex', {redirectTo: "/"})
        }}>
            <button
                className={styles.signInWithYandex}
                type='submit'>Sign in with Yandex
            </button>
        </form>
    )
}