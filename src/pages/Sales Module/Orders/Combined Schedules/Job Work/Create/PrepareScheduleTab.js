import React from "react";
import { Table } from "react-bootstrap";

export default function PrepareScheduleTab() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <button className="button-style  group-button" style={{width:"120px"}}>Select All</button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button className="button-style  group-button" style={{width:"120px"}}>Revers</button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button className="button-style  group-button" style={{width:"120px"}}>{">>"} </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button className="button-style  group-button" style={{width:"185px"}}>
                Prepare Schedule
              </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button className="button-style  group-button" style={{width:"175px"}}>
                Create Schedule
              </button>
            </div>
          </div>
          <div style={{overflowY:"scroll"}}>
            <Table
              striped
              className="table-data border mt-2"
              style={{ border: "1px" ,height:"200px",overflowY:"scroll"}}
            >
              <thead className="tableHeaderBGColor">
                <tr>
                  <th>Select</th>
                  <th>Order Schedule No</th>
                  <th>PO</th>
                  <th>Target Date</th>
                </tr>
              </thead>
              <tbody className="tablebody"></tbody>
            </Table>
          </div>
          <div style={{overflowY:"scroll"}}>
            <Table
              striped
              className="table-data border mt-2"
              style={{ border: "1px",height:"200px" }}
            >
              <thead className="tableHeaderBGColor">
                <tr>
                  <th>Dwg Name</th>
                  <th>Quantity</th>
                  <th>M Process</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody className="tablebody"></tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <button className="button-style  group-button" style={{width:"110px"}}>{"<<"}</button>
            </div>
            <div className="col-md-4 col-sm-12">
              <button className="button-style  group-button" style={{width:"110px"}}>Select All</button>
            </div>
            <div className="col-md-1 col-sm-12">
              <button className="button-style  group-button" style={{width:"110px"}}>Revers</button>
            </div>
          </div>
          <div style={{overflowY:"scroll"}}>
            <Table
              striped
              className="table-data border mt-2"
              style={{ border: "1px",height:"400px" }}
            >
              <thead className="tableHeaderBGColor">
                <tr>
                  <th>Select</th>
                  <th>Order Schedule No</th>
                  <th>PO</th>  
                </tr>
              </thead>
              <tbody className="tablebody"></tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
