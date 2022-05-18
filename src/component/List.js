import { duration } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  //   const [candidate, setcandidate] = useState(
  //     localStorage.getItem(JSON.parse("list") || [])
  //   );
  const navigate = useNavigate();
  const candidate = JSON.parse(localStorage.getItem("list"));
  console.log(candidate);
  return (
    <div>
      <div className="container my-4">
        <main>
          <div className="py-5">
            <h2>
              Candidates List
              <button
                className="btn btn-primary float-end"
                onClick={() => navigate("/")}
              >
                Add Candidate
              </button>
            </h2>
          </div>

          <div className="row">
            <div className="col-12 ms-auto me-auto">
              <div className="card">
                <div className="card-body">
                  <table className="table">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number of Skills</th>
                      <th>Total Work Experience (in months)</th>
                      <th>Actions</th>
                    </tr>
                    {candidate.map((candi, index) => {
                      return (
                        <tr>
                          <td>1</td>
                          <td>{candidate[index].firstname}</td>
                          <td>{candidate[index].Email} </td>
                          <td>5</td>
                          <td>
                            {candidate[index].duration1}+
                            {candidate[index].duration2}
                          </td>
                          <td>
                            <a href="#">Edit</a>
                            <a href="#" className="text-danger ms-2">
                              Delete
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default List;
