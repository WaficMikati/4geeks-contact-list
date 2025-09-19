import { faLocationDot, faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import Entry from './Entry'
import ModBtns from './ModBtns'
import { useState } from 'react'
import { Form } from 'react-router'

export default function DisplayCard({ contact }) {
  const [editMode, setEditMode] = useState(false)

  return (
    <Form
      method={editMode ? 'put' : 'delete'}
      onSubmit={() => setEditMode(false)}
      className='container-fluid container-md bg-secondary-subtle px-3 py-4 mb-3 rounded-4'
    >
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col-auto align-content-center'>
              <img
                src='https://placehold.co/200'
                className='img-fluid rounded-circle'
              />
            </div>
            <div className='col'>
              <input type="hidden" name="id" value={contact.id} />
              <Entry icon={faUser} text={contact.name} size={3} edit={editMode} name={'name'} id={contact.id} />
              <Entry icon={faLocationDot} text={contact.address} size={5} edit={editMode} name={'address'} id={contact.id} />
              <Entry icon={faPhone} text={contact.phone} size={5} edit={editMode} name={'phone'} id={contact.id} />
              <Entry icon={faEnvelope} text={contact.email} size={5} edit={editMode} name={'email'} id={contact.id} />
            </div>
          </div>
        </div>
        <ModBtns contact={contact} edit={{ editMode, setEditMode }} />
      </div>
    </Form>
  )
}