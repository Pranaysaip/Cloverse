import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
    const { user, getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!isAuthenticated) return;

            try {
                console.log("Fetching user data..."); // ✅ Debug Log
                const token = await getAccessTokenSilently();
                const response = await axios.get("http://localhost:5000/api/users/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setData(response.data);
                console.log("User data:", response.data); // ✅ Debug Log
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getAccessTokenSilently, isAuthenticated]);

    if (!isAuthenticated) return <h2>Please log in to view your profile.</h2>;
    if (loading) return <h2>Loading user data...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>Welcome, {data?.name || user?.name}!</h2>
            <p>Email: {data?.email || user?.email}</p>

            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        </div>
    );
}
