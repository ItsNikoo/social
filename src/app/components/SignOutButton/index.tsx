// components/SignOutButton.tsx
'use client'

import {signOut} from "next-auth/react"
import styles from "./SignOutButton.module.css"

export default function SignOutButton() {
    const handleSignOut = () => {
        signOut({
            callbackUrl: '/',
            redirect: true
        }).catch(err => console.error('Sign out error:', err))
    }

    return (
        <button
            onClick={handleSignOut}
            className={styles.Button}>
            Выход
        </button>
    )
}