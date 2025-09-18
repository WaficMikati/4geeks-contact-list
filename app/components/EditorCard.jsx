import { faLocationDot, faPhone, faEnvelope, faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-router";

export default function EditorCard({ contact, edit }) {
  return (
    <Form method="put" onSubmit={edit} className="container row bg-secondary-subtle p-4 m-auto mb-3 rounded-3 fs-5">
      <div className="col-3 col-lg-2 align-content-center">
        <img
          src='https://placehold.co/450'
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col d-grid">
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control text-center fs-2 border-0 rounded-3"
            name="name"
            defaultValue={contact.name}
          />
        </div>
        <div className="d-grid">
          <div className="input-group mb-1">
            <span className="col-auto input-group-text fs-4 bg-transparent border-0" id="basic-addon1">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <input type="text"
              className="form-control fs-4 border-0 rounded-3"
              name="address"
              defaultValue={contact.address}
            />
          </div>
          <div className="input-group mb-1">
            <span className="col-auto input-group-text fs-4 bg-transparent border-0" id="basic-addon1">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input type="text"
              className="form-control fs-4 border-0 rounded-3"
              name="phone"
              defaultValue={contact.phone}
            />
          </div>
          <div className="input-group">
            <span className="col-auto input-group-text fs-4 bg-transparent border-0" id="basic-addon1">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="text"
              className="form-control fs-4 border-0 rounded-3"
              name="email"
              defaultValue={contact.email}
            />
          </div>
        </div>
      </div>
      <div className="col-2 col-lg-1 d-grid gap-2">
        <input type="hidden" name="id" value={contact.id} />
        <button type="submit" className="btn btn-outline-dark w-100 h-100">
          <FontAwesomeIcon icon={faCheck} className="text-success" />
        </button>
        <button type="submit" className="btn btn-outline-dark" onClick={edit} >
          <FontAwesomeIcon icon={faX} className="text-danger" />
        </button>
      </div>
    </Form >
  )
}