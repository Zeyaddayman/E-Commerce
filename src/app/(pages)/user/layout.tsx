import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { redirect } from "next/navigation";

const authenticationLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {

    const cookieStore = cookies();
    
    const authToken = cookieStore.get('authToken');
    
    const user = jwt.decode(authToken ? authToken.value : "", { json: true });

    if (user) {
        return redirect("/")
    }

    return children;
}

export default authenticationLayout;