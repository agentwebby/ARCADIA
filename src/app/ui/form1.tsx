import Form from 'next/form'
import SubmitButton from './submitButton'
export default function Form1() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <SubmitButton></SubmitButton>
    </Form>
  )
}