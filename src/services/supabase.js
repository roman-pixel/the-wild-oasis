import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://poouilosujwdhvqsjqhg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvb3VpbG9zdWp3ZGh2cXNqcWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNTM4NjMsImV4cCI6MjAzMjYyOTg2M30.bns8UwQV-5qUiYUII_HBfh_CsgN5j4bgg-dwJtoYipw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
