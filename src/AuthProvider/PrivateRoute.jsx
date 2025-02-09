import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser();

    if (!isSignedIn && isLoaded) {
        return <Navigate to="/signIn" />;
    }

    return children;
};

export default PrivateRoute;
