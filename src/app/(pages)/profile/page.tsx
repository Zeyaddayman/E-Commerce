import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { redirect } from "next/navigation";
import LogoutButton from "@/app/_components/ui/LogoutButton";

const Profile = () => {
    const cookieStore = cookies();

    const authToken = cookieStore.get('authToken');

    const user = jwt.decode(authToken ? authToken.value : "", { json: true });

    if (!user) {
        return redirect("/user/login")
    }

    return (
        <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.role}</p>
            <LogoutButton />
        </div>
    )
}

export default Profile