import { useLoaderData } from "react-router"
import Navbar from "../components/Navbar"
import DisplayCard from "../components/DisplayCard"

export async function loader({ params }) {
  const { slug } = params
  const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`)

  return response.json()
}

export async function action({ request, params }) {
  const formData = await request.formData()

  switch (request.method) {
    case 'DELETE':
      const contactId = formData.get('contactId')
      await fetch(`https://playground.4geeks.com/contact/agendas/${params.slug}/contacts/${contactId}`, {
        method: 'DELETE'
      })
      return null
    case 'PUT':
      const id = formData.get('id')
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address')
      }
      console.log('id: ', id)
      console.log(data);


      await fetch(`https://playground.4geeks.com/contact/agendas/${params.slug}/contacts/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(data)
      })
      return null
  }
}

export default function Contact() {
  const data = useLoaderData()

  return (
    <>
      <Navbar fullMode={true} routeToForm={`/agenda/${data.slug}/add`} />
      <h1 className="text-center mb-5">{data.slug}</h1>
      {data.contacts && data.contacts.map((e, i) => (
        <div key={i}>
          <DisplayCard contact={e} />
        </div>
      ))}
    </>
  )
}