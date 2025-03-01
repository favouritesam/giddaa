'use client';



import SignIn from "@/components/containers/auth/login";

export default function LoginPage() {
    // Placeholder function for now
    const handleSignIn = (data: { email: string; password: string }) => {
        console.log("User signed in with:", data);
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    return <SignIn onSignIn={handleSignIn} />;
}
