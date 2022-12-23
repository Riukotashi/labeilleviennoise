import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import {
  googleAuthenticator,
  redirectIfNotAuthenticatedLoader,
} from '@/modules/auth/auth.server'
import BlogEditorBar from '@/modules/blog/ui/posts/editor/blog-editor-bar'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader = (loaderArgs: LoaderArgs) =>
  redirectIfNotAuthenticatedLoader(googleAuthenticator)(loaderArgs)

export default function Admin() {
  return (
    <>
      <BlogEditorBar showPreviousLink={true} />
      <Outlet />
    </>
  )
}
