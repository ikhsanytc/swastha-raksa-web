import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { getUser } from "../lib/supabase";

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUser(user);
    })();
  }, []);
  return { user };
}
