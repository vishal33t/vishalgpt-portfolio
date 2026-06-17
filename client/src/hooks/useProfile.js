import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

function useProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  return profile;
}

export default useProfile;