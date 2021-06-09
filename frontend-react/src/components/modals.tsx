function Modals() {
  return (
  <>
      <div className="modal fade" id="donar" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-body">
            <div className="modal-content center">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <h3 className="modal-title text-purple" id="myModalLabel">¡Quisiera donar!</h3>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              </div>
              <div className="modal-footer center">
                <button type="button" className="button button-small button-circle button-border button-border-thin button-amber center" data-dismiss="modal">¡Donar!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="agregar" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-body">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <h3 className="modal-title text-purple mb-3" id="myModalLabel">Agregar promesa</h3>
                <div className="form-group">
                  <label>Categoría</label>
                  <input type="text" className="form-control" id="#"/>
                </div>
                  <div className="form-group">
                    <label>Promesa</label>
                    <textarea className="form-control" id="#" rows={3}></textarea>
                  </div>
                <div className="modal-footer center mt-3">
                  <button type="button" className="button button-small button-circle button-border button-border-thin button-amber center" data-dismiss="modal">Agregar promesa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;