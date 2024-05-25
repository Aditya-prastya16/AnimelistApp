import Link from "next/link";
import {authUserSession} from "@/libs/auth-libs"

 const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    
      <div className="flex justify-between gap-4">
        {
            user ? 
            <Link href="/users/dashboard" className="py-1 text-lg font-semibold hover:text-color-dark">Dashboard</Link>
            : null
        }
        <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 items-center text-center inline-block rounded-md font-semibold hover:bg-color-primary hover:text-color-secondary">{actionLabel}</Link>
      </div>
    
  )
}

export default UserActionButton

