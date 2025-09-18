import { faLocationDot, faPhone, faEnvelope, faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-router";

export default function DisplayCard({ contact, edit }) {
  return (
    <div className="container row bg-secondary-subtle p-4 m-auto mb-3 rounded-3 fs-5">
      <div className="col-3 col-lg-2 align-content-center">
        <img
          src='https://placehold.co/450'
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col d-grid">
        <div className="input-group mb-1">
          <span className="input-group-text fs-2 bg-transparent border-0 w-100 justify-content-center">
            {contact.name}
          </span>
        </div>
        <div className="d-grid">
          <div className="input-group mb-1">
            <span
              id="basic-addon1"
              className="col-auto input-group-text fs-4 bg-transparent border-0"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span type="text"
              className="col input-group-text fs-4 bg-transparent border-0">
              {contact.address}
            </span>
          </div>
          <div className="input-group mb-1">
            <span
              id="basic-addon1"
              className="col-auto input-group-text fs-4 bg-transparent border-0"
            >
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span type="text"
              className="col input-group-text fs-4 bg-transparent border-0">
              {contact.phone}
            </span>
          </div>
          <div className="input-group">
            <span id="basic-addon1"
              className="col-auto input-group-text fs-4 bg-transparent border-0"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span type="text"
              className="col input-group-text fs-4 bg-transparent border-0">
              {contact.email}
            </span>
          </div>
        </div>
      </div>
      <div className="col-2 col-lg-1 d-grid gap-2">
        <button
          className="btn btn-outline-dark w-100 h-100"
          onClick={edit}
        >
          <FontAwesomeIcon
            icon={faPencil}
            className="text-success border-opacity-10"
          />
        </button>
        <Form method="delete" >
          <input type="hidden"
            name="contactId"
            value={contact.id} />
          <button type="submit"
            className="btn btn-outline-dark w-100 h-100"
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="text-danger"
            />
          </button>
        </Form>
      </div>
    </div>
  )
}