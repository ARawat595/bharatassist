import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, mobile, email, state } = body

    if (!name || !mobile) {
      return NextResponse.json({ error: 'Name and mobile are required' }, { status: 400 })
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json({ error: 'Enter a valid 10-digit Indian mobile number' }, { status: 400 })
    }

    // Check duplicate
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('mobile', mobile)
      .single()

    if (existing) {
      return NextResponse.json({ error: 'This mobile number is already registered' }, { status: 409 })
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ name, mobile, email: email || null, state: state || null }])

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
