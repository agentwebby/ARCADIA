"use client"
import Form from 'next/form'
import UploadButton from './uploadButton'

export default function UploadForm(action: (formData: FormData) => Promise<void>) {
  return (
    <Form action={action} formEncType='multipart/form-data' >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingBottom: '20px'}}>
        <input type = "file" name = 'file' title='select'/>
      </div>
      <UploadButton />
    </Form>
  )
}