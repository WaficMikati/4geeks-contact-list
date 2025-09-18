import { Form, Link, redirect, useParams } from "react-router";
import Navbar from "../components/Navbar"

export async function action({ request, params }) {
  const { slug } = params
  const formData = await request.formData()

  const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address')
    })
  })

  if (response.ok) {
    return redirect(`/agenda/${slug}`);
  }

  const errorData = await response.text();
  console.log('Error ', errorData)
  return { error: 'Something failed somewhere...' };
}

export default function AddContact() {
  const { slug } = useParams();

  const categories = [
    {
      text: "Name",
      name: 'name',
      type: 'text',
      placeholder: 'Dolcey Gutiérrez'
    },
    {
      text: "Phone",
      name: 'phone',
      type: 'tel',
      placeholder: '123-456-7890'
    },
    {
      text: "Email",
      name: 'email',
      type: 'email',
      placeholder: 'example@email.com'
    },
    {
      text: "Address",
      name: 'address',
      type: 'text',
      placeholder: 'Un Calle 42#10-20'
    }
  ]

  return (
    <>
      <Navbar fullMode={false} />
      <div className="container">
        <h1 className="text-center mb-4">Add Contact</h1>
        <Form method="post">
          {categories.map((e, i) => (
            <div key={i} className="input-group mb-3">
              <span className="input-group-text col-2">
                {e.text}
              </span>
              <input
                type={e.type}
                className="form-control"
                placeholder={e.placeholder}
                name={e.name}
                required
              />
            </div>
          ))}
          <div className="d-flex gap-3">
            <Link className='btn btn-outline-secondary' to={`/agenda/${slug}`}>
              Back
            </Link>
            <button className='btn btn-success w-100' type="submit">
              Add
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}