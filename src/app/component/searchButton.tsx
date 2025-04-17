'use client'
import { useFormStatus } from 'react-dom'
 
export default function SearchButton() {
  const status = useFormStatus()
  return (
    <div>
        {status.pending ? 'your result are processing' : 'ready'}
    
    <button type="submit">{status.pending ? 'Searching...' : 'Search'}</button>
    </div>
  )
}