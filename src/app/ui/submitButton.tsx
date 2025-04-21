'use client'
import { useFormStatus } from 'react-dom'
 
export default function SubmitButton() {
  const status = useFormStatus()
  return (
    <button type="submit">{status.pending ? 'Searching...' :''}Submit</button>
  )
}