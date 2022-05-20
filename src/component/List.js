// import { duration } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  //   const [candidate, setcandidate] = useState(
  //     localStorage.getItem(JSON.parse("list") || [])
  //   );
  const navigate = useNavigate();
  const [candidates, setcandidate] = useState(JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : []);
  console.log(candidates);

  const deleteItem = (index) => {

    const lc = JSON.parse(localStorage.getItem("list"))
    console.log(lc);
    const newlc = lc.filter((data, ind) => ind !== index)
    console.log(newlc);
    setcandidate(newlc)
    localStorage.setItem("list", JSON.stringify(newlc))


  }

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
                    {
                      candidates != "" && candidates.map((candi, index) => {

                        return (
                          <tr>
                            <td>{index + 1}   </td>
                            <td>{candi.firstname}  {candi.lastname}</td>
                            <td>{candi.Email} </td>
                            <td>{candi.skill.length}</td>
                            <td>
                              {
                                candi.experiance.map((num) => Number(num.Duration))
                                  .reduce((x, y) => x + y)

                              }

                            </td>
                            <td>
                              <a onClick={() => navigate(`/Edit/${candi.id}`)}>Edit</a>

                              <a className="text-danger ms-2" onClick={() => { deleteItem(index) }} >
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
