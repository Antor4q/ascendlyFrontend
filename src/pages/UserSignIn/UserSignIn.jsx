import { SignIn } from "@clerk/clerk-react";

const UserSignIn = () => {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
           <SignIn/>
        </div>
    );
};

export default UserSignIn;