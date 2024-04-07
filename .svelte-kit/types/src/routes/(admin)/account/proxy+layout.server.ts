// @ts-nocheck
import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load = async ({
  locals: { supabase, getSession },
}: Parameters<LayoutServerLoad>[0]) => {
  const session = await getSession()

  if (!session) {
    throw redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", session.user.id)
    .single()

  return { session, profile }
}
