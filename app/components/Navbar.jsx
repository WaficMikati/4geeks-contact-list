import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import { BaseContext } from '../root'
import AddAgendaModal from './AddAgendaModal'

export default function Navbar({ fullMode, routeToForm }) {
  const { theme, setTheme } = useContext(BaseContext)

  return (
    <nav className={`navbar bg-${theme} px-5 mb-5 sticky-top`}>
      <div className='container-fluid'>
        {!fullMode && <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#addAgenda">Add Ageda</button>}
        {fullMode && (
          <>
            <Link to={'/'} className='btn btn-outline-secondary me-3'>
              Home
            </Link>
            <Link to={routeToForm} className='btn btn-success'>
              Add Contact
            </Link>
          </>
        )}
        <button className='btn ms-auto fs-3' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
      </div>
    </nav>
  )
}