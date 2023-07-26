import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL as string,
  import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY as string
);

export default supabase;