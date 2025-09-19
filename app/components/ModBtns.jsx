import { faPencil, faTrashAlt, faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModBtns({ contact, edit }) {
  const { editMode, setEditMode } = edit

  const toggleEditMode = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
  }

  return (
    <div className='col-auto'>
      <div className="row h-100 gap-2">
        <input type='hidden' name={editMode ? 'contact' : 'contactId'} value={editMode ? JSON.stringify(contact) : contact.id} />
        <div className='row'>
          <button type={editMode ? 'submit' : 'button'} className='btn btn-outline-dark border-0 rounded-4 rounded-bottom-0' onClick={editMode ? null : toggleEditMode}>
            <FontAwesomeIcon icon={editMode ? faCheck : faPencil} className='text-success' />
          </button>
          <button type={editMode ? 'button' : 'submit'} className='btn btn-outline-dark border-0 rounded-4 rounded-top-0' onClick={editMode ? toggleEditMode : null} >
            <FontAwesomeIcon icon={editMode ? faX : faTrashAlt} className='text-danger' />
          </button>
        </div>
      </div>
    </div>
  )
}