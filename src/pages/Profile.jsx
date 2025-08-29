import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=> {
    API.get("/user/profile").then(r=>setProfile(r.data)).catch(e=>setError("Not logged in / token invalid"));
  }, []);

  if(error) return <div><h2>Profile</h2><p>{error}</p></div>;
  if(!profile) return <div><h2>Profile</h2><p>Loading...</p></div>;

  return (
    <div>
      <h2>Profile</h2>
      <p><b>ID:</b> {profile.id}</p>
      <p><b>Username:</b> {profile.username}</p>
      <p><b>Email:</b> {profile.email}</p>
      <p><b>Role:</b> {profile.role}</p>
    </div>
  );
}
