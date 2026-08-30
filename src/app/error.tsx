"use client"

import { error } from "console"
import { use, useEffect } from "react"
import ErorrHandleNoDataFound from "./global-error"



export default function ErrorPage({
    error,
    retry, }: {
        error: Error & {digest ?: string}
    retry: ()=>void
    }
) {
    useEffect(() => {
        console.error(error)
    }, [error])
  return (
    <div>
      <ErorrHandleNoDataFound/>
    </div>
  )
}
