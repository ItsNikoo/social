import {auth} from "@/auth";
import {SignOutButton} from "@/app/components/SignOutButton";

export default async function Dashboard() {
    const session = await auth()

    if (!session?.user) return <div>Нищеброд</div>

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10 gap-5'>
                <div className='flex flex-row items-center justify-center gap-5'>
                    {session?.user?.image && (
                        <img
                            src={session.user.image}
                            alt="User profile"
                            className="rounded-full w-25"
                        />
                    )}                    <h1 className='font-bold text-xl'>{session?.user.name}</h1>
                </div>
                <div className='w-full'>
                    <SignOutButton/>
                </div>
            </div>
        </div>
    )
}