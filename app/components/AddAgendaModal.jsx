import { Form } from "react-router";



export default function AddAgendaModal() {
  return (
    <>
      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#addAgenda">Add Ageda</button>

      <div className="modal fade" id="addAgenda" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">New Agenda</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form method="post">
              <input type="hidden" name="_action" value='add' />
              <div className="modal-body">
                <div className="input-group">
                  <span className="input-group-text">Name</span>
                  <input type="text" name="name" className="form-control" placeholder="Enter Agenda Name" />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Add</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}