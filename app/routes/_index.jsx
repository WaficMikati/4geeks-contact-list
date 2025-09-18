import { Link, useLoaderData, redirect, useFetcher } from "react-router"
import { useState, useContext } from "react";
import { BaseContext } from "../root";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import AddAgendaModal from "../components/AddAgendaModal";

export async function loader() {
  const response = await fetch('https://playground.4geeks.com/contact/agendas?offset=0&limit=100')

  return response.json()
}

export async function action({ request }) {
  const formData = await request.formData()
  const actionType = formData.get('_action')

  switch (actionType) {
    case 'add':
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${formData.get('name')}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' }
      });

      if (response.ok) {
        return redirect(`/agenda/${formData.get('name')}`);
      }

      const errorData = await response.text();
      console.log('Error ', errorData)
      return { error: 'Something failed somewhere...' };

    case 'delete':
      const slug = formData.get('slug')

      await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
        method: 'DELETE'
      })
      return redirect('/')
  }
}

export default function Home() {
  const [confirmSlug, setConfirmSlug] = useState(null)
  const { theme } = useContext(BaseContext)
  const data = useLoaderData()
  const fetcher = useFetcher()

  return (
    <>
      <Navbar fullMode={false} />
      <AddAgendaModal />
      <h1 className="text-center mb-4">Agendas</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row g-3">
          {data.agendas.map((e, i) => (
            <div className="col btn-group" key={i}>
              <Link className={`col-10 btn btn-${theme} fs-3`} to={`/agenda/${e.slug}`}>{e.slug}</Link>
              {confirmSlug === e.slug ? (
                <>
                  <button
                    className={`col-1 p-0 btn btn-${theme} text-success`}
                    onClick={() => {
                      fetcher.submit(
                        { _action: 'delete', slug: e.slug },
                        { method: 'post' }
                      )
                    }}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button
                    className={`col-1 p-0 btn btn-${theme} text-danger`}
                    onClick={() => setConfirmSlug(null)}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </>
              ) : (
                <button
                  className={`col-2 p-0 btn btn-${theme} text-danger`}
                  onClick={() => setConfirmSlug(e.slug)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="fs-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}