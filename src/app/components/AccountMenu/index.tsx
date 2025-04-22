import {auth} from "@/auth";
import SignOutButton from "@/app/components/SignOutButton";
import Link from "next/link";
import styles from "./AccountMenu.module.css"
import Image from "next/image";

export default async function AccountMenu() {
    const session = await auth();

    if (!session?.user) {
        return (
            <div className={styles.container}>
                <div className={styles.userContainer}>
                    <div className={styles.avatarSection}>
                        <div className={styles.placeholderAvatar}></div>
                    </div>
                    <div className={styles.nameSection}>
                        <h1 className={styles.userName}>???</h1>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href={"/login"} className={styles.Button}>
                        Войти
                    </Link>

                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>
                <div className={styles.avatarSection}>
                    {session?.user?.image && (
                        <img
                            src={session.user.image}
                            alt="User profile"
                            className={styles.placeholderAvatar}
                        />
                    )}
                </div>
                <div className={styles.nameSection}>
                    <h1 className={styles.userName}>{session.user.name}</h1>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <SignOutButton/>
            </div>
        </div>
    );
}