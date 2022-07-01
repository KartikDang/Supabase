import { createClient } from '@supabase/supabase-js'


const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhbXhsbWJ5cWF2aGttaWJ1Z3NiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjQyNzM1MSwiZXhwIjoxOTcyMDAzMzUxfQ._itCzzPwvH5TyELByNBIB1gTJ5yLnv-IS9svyIafsKs'
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
