import { createClient } from "@supabase/supabase-js";
import { supabase_api_key, supabase_url } from "../constants/env";

export const supabase = createClient(supabase_url, supabase_api_key);

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export const getStoragePath = (url: string) => {
  const marker = "/storage/v1/object/public/";
  const index = url.indexOf(marker);
  return index !== -1 ? url.slice(index + marker.length) : "";
};
