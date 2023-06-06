import React from "react";
import { Form, Table } from "react-bootstrap";

export default function CombinedScheduleDetailsTab() {
  return (
    <div>
      <Form className="form mt-2">
        <div className="ip-box">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4 mb-2 col-sm-12">
                  <label className="form-label">No</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4  mb-2 col-sm-12">
                  <label className="form-label">Customer</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4  mb-2 col-sm-12">
                  <label
                    className="form-label"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Sales Contact
                  </label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4 mb-2 col-sm-12">
                  <label className="form-label">Type</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4  mb-2 col-sm-12">
                  <label className="form-label">PO No</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4  mb-2 col-sm-12">
                  <label
                    className="form-label"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Target Name
                  </label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4 mb-2 col-sm-12">
                  <label className="form-label">Status</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4  mb-2 col-sm-12">
                  <label className="form-label">Instruction</label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <input
                    class=""
                    type="text"
                    style={{ borderRadius: "0" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4 mt-2 col-sm-12">
                  <label
                    className="form-label"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Delivery Date
                  </label>
                </div>
                <div className="col-md-8 col-sm-12">
                  <input
                    className="in-fields mt-2"
                    name="UnistallDate"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col-md-4 mb-2 col-sm-12">
                  <label
                    className="form-label"
                    style={{ whiteSpace: "nowrap", marginLeft: "-10px" }}
                  >
                    Dealing Engineer
                  </label>
                </div>
                <div className="col-md-8  mb-2 col-sm-12">
                  <Form.Select id="gstpan" className="ip-select">
                    <option value="Select">option 1</option>

                    <option value="GST">option 2</option>

                    <option value="PAN">option 3</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <div>
        <Table
          striped
          className="table-data border"
          style={{ border: "1px", height: "400px" }}
        >
          <thead className="tableHeaderBGColor">
            <tr>
              <th>Dwg Name</th>
              <th>Mtrl_Code</th>
              <th>M Process</th>
              <th>Operation</th>
              <th>Mtrl_Source</th>
              <th>Insp Level</th>
              <th>Quantity Scheduled</th>
            </tr>
          </thead>
          <tbody className="tablebody"></tbody>
        </Table>
      </div>
    </div>
  );
}
