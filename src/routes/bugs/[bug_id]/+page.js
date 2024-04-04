import { error } from '@sveltejs/kit'
import { pb } from '$lib/pocketbase'

export async function load ({ params }) {
  try {
    const report = await pb.collection('bug_reports_public').getFirstListItem(`id="${params.bug_id}"`, {
      expand: 'tags'
    })
    return {
      report
    }
  } catch (err) {
    console.error(err)
  }
  throw error(404, 'Report not found')
}
