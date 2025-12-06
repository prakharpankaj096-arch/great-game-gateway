import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sliyztgfkgohuhuixzyy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaXl6dGdma2dvaHVodWl4enl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzQ4MDksImV4cCI6MjA4MDM1MDgwOX0.tRnCdi3PiphDUrgriFYaJa2nu8M6orHmiRqIrcvKWFQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
    console.log('Attempting to insert into contact_submissions...')
    const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
            {
                name: 'Test User',
                email: 'test@example.com',
                company: 'Test Co',
                message: 'This is a test message',
            },
        ])
        .select()

    if (error) {
        console.error('Error:', JSON.stringify(error, null, 2))
    } else {
        console.log('Success:', data)
    }
}

test()
