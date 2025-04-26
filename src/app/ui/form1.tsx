"use client"
import Form from 'next/form'
import SubmitButton from './submitButton'
export default function Form1() {
  return (
    <Form action="/upload" formMethod='POST' formEncType='multipart/form-data' >
      
      <input type = "file" name = 'file' />
      <br/>
      <SubmitButton></SubmitButton>
    </Form>
  )
}