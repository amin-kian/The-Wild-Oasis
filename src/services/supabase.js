import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = "https://eyllrtwkvrcktvjlmpfp.supabase.co";
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bGxydHdrdnJja3R2amxtcGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTM5NzAsImV4cCI6MjA2NTYyOTk3MH0.U6Zb-AocnTppobSkKaECasQ21fM4uwtbnbC_K89hPPw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
