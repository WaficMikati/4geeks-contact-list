import { useLoaderData } from "react-router"
import { useState } from "react"
import Navbar from "../components/Navbar"
import DisplayCard from "../components/DisplayCard"
import EditorCard from "../components/EditorCard"

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
      await fetch(`https://playground.4geeks.com/contact/agendas/${params.slug}/contacts/${formData.get('id')}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', acctept: 'application/json' },
        body: JSON.stringify({
          'name': formData.get('name'),
          'phone': formData.get('phone'),
          'email': formData.get('email'),
          'address': formData.get('address')
        })
      })
      return null
  }
}

export default function Contact() {
  const data = useLoaderData()
  const [editMode, setEditMode] = useState(false)

  function toggleEditMode() {
    setEditMode(!editMode)
  }

  return (
    <>
      <Navbar fullMode={true} routeToForm={`/agenda/${data.slug}/add`} />
      <h1 className="text-center mb-5">{data.slug}</h1>
      {data.contacts && data.contacts.map((e, i) => (
        <div key={i}>
          {editMode
            ? <EditorCard contact={e} edit={toggleEditMode} />
            : <DisplayCard contact={e} edit={toggleEditMode} />}
        </div>
      ))}
    </>
  )
}