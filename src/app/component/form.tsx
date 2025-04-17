import Form from 'next/form'
import SearchButton from './searchButton'
export default async function FirstForm() {

  await setTimeout(()=>{},30000);  
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="query" />
      <input type="file"></input>
      <SearchButton></SearchButton>
    </Form>
  )
}