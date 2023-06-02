import React from "react";
import PrepareScheduleTab from "./PrepareScheduleTab";
import CombinedScheduleDetailsTab from "./CombinedScheduleDetailsTab";
import { Form, Tab, Tabs } from "react-bootstrap";

export default function Create() {
  return (
    <div>
      <div className="col-md-12">
        <div className="row">
          <h4 className="title">Combined Schedule Selector</h4>
        </div>
      </div>
      {/* <h5 className="mt-2"><b>Combined Schedule Selector</b></h5> */}
      <div className="row mt-3">
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-4 mb-2 col-sm-12">
              <label className="form-label">Customer Name</label>
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
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-4  mb-2 col-sm-12">
              <label className="form-label">Sales Contact</label>
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
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h5>
            <b>Selected Schedules</b>
          </h5>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-4 mt-2  mb-2 col-sm-12">
              <label className="form-label">Completion Date</label>
            </div>
            <div className="col-md-8  mb-2 col-sm-12">
              <input
                className="in-fields mt-2"
                name="Completion Date"
                type="date"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <Tabs>
        <Tab eventKey="prepareSchedule" title="Prepare Schedule">
          <PrepareScheduleTab />
        </Tab>
        <Tab
          eventKey="combinedScheduleDetails"
          title="Combine Schedule Details"
        >
          <CombinedScheduleDetailsTab />
        </Tab>
      </Tabs>
    </div>
  );
}
