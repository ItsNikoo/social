import {auth} from "@/auth";
import AccountMenu from "@/app/components/AccountMenu";
import styles from "./Dashboard.module.css"

export default async function Dashboard() {
    const session = await auth()

    if (!session?.user) {
        return (
            <div className={styles.Container}>
                <AccountMenu/>
            </div>
        )
    }

    return (
        <div className={styles.Container}>
            <AccountMenu/>
        </div>
    )
}