'use client'
import { useFormStatus } from 'react-dom'
 
export default function UploadButton() {
  const status = useFormStatus()
  return (
    <button className="text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal-400 dark:text-teal-400 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-900"
            type="submit">{status.pending ? 'Uploading...' :''}Upload</button>
  )
}