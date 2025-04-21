// import {auth} from "@/auth";
// import SignOutButton from "@/app/components/SignOutButton";
// import Link from "next/link";
// import styles from "./AccountMenu.module.css"
//
// export default async function AccountMenu() {
//     const session = await auth()
//
//     if (!session?.user) {
//         return (
//             <div className='flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10 gap-5'>
//                 <div className='flex flex-row items-center justify-around gap-5 w-full'>
//                     <div className='w-1/2 '>
//                         <div className='rounded-full bg-gray-500 w-25 h-25'></div>
//                     </div>
//                     <div className='w-1/2 '>
//                         <h1 className='font-bold text-xl'>???</h1>
//                     </div>
//                 </div>
//                 <div className='w-full'>
//                     <Link className={styles.Button} href={"/login"}>Войти</Link>
//                 </div>
//             </div>
//         )
//     }
//
//     return (
//         <div className='flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10 gap-5'>
//             <div className='flex flex-row items-center justify-center gap-5'>
//                 <div className='w-1/2 '>
//                     {session?.user?.image && (
//                         <img
//                             src={session.user.image}
//                             alt="User profile"
//                             className="rounded-full w-25"
//                         />
//                     )}
//                 </div>
//                 <div className='w-1/2 '>
//                     <h1 className='font-bold text-xl'>{session?.user.name}</h1>
//                 </div>
//             </div>
//             <div className='w-full'>
//                 <SignOutButton/>
//             </div>
//         </div>
//     )
// }

import {auth} from "@/auth";
import SignOutButton from "@/app/components/SignOutButton";
import Link from "next/link";
import styles from "./AccountMenu.module.css"

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