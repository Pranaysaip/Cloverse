// import { useAuth0 } from "@auth0/auth0-react";

// export default function LoginButton() {
//     const { loginWithRedirect } = useAuth0();
//     return <button onClick={() => loginWithRedirect()}>Log in</button>;
// };


const { loginWithRedirect } = useAuth0();
const navigate = useNavigate();

const handleLogin = async () => {
  await loginWithRedirect();
  navigate("/dashboard"); // Redirect to dashboard after login
};
