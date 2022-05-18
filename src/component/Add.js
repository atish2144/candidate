import { RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    Gender: "",
    Email: "",
    Address: "",
    country: "",
    State: "",
    Pin: "",
    skill: [],

    companyName1: "",
    Duration1: "",
    responsibilities1: "",

    companyName2: "",
    Duration2: "",
    responsibilities2: "",

    // companyName3: "",
    // Duration3: "",
    // responsibilities3: "",

    // companyName4: "",
    // Duration4: "",
    // responsibilities4: "",

    // companyName5: "",
    // Duration5: "",
    // responsibilities5: "",
  });

  const navigate = useNavigate();
  const [count, setcount] = useState(0);
  const [candidate, setcandidate] = useState([]);

  const handleSubmit = () => {
    console.log(data);

    setcandidate([...candidate, data]);
    localStorage.setItem("list", JSON.stringify(candidate));

    // setTimeout(() => {
    //   navigate("/list");
    // }, 2000);
  };

  useEffect(() => {
    // localStorage.setItem("list", JSON.stringify(candidate));
  }, [candidate]);

  //   const handleEmail = (e) => {};
  console.log(candidate);
  return (
    <div className="container my-4">
      <main>
        <div className="py-5 text-center">
          <h2>Add Candidate</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8 ms-auto me-auto">
            <h4 className="mb-3">Basic Info</h4>
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  value={data.firstname}
                  onChange={(e) =>
                    setdata({ ...data, firstname: e.target.value })
                  }
                />
              </div>

              <div className="col-sm-6">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  value={data.lastname}
                  onChange={(e) =>
                    setdata({ ...data, lastname: e.target.value })
                  }
                />
              </div>

              <div className="col-12">
                <label className="form-label">Gender</label>
                <div>
                  {/* <RadioGroup
                    value={data.Gender}
                    onChange={(e) =>
                      setdata({ ...data, Gender: e.target.value })
                    }
                  > */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value={"Male"}
                      onChange={(e) =>
                        setdata({ ...data, Gender: e.target.value })
                      }
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value={"female"}
                      onChange={(e) =>
                        setdata({ ...data, Gender: e.target.value })
                      }
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value={"other"}
                      onChange={(e) =>
                        setdata({ ...data, Gender: e.target.value })
                      }
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                  {/* </RadioGroup> */}
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={data.Email}
                  onChange={(e) => setdata({ ...data, Email: e.target.value })}
                  //   onChange={(e) => {
                  //     handleEmail(e);
                  //   }}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  placeholder="1234 Main St"
                  onChange={(e) =>
                    setdata({ ...data, Address: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="col-md-5">
                <label className="form-label">Country</label>
                <select
                  className="form-select"
                  value={data.country}
                  onChange={(e) =>
                    setdata({ ...data, country: e.target.value })
                  }
                >
                  <option value="">Choose...</option>
                  <option>India</option>
                  <option>United States</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">State</label>
                <select
                  className="form-select"
                  value={data.State}
                  onChange={(e) => setdata({ ...data, State: e.target.value })}
                >
                  <option value="">Choose...</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Pin / Zip</label>
                <input
                  type="text"
                  className="form-control"
                  value={data.Pin}
                  onChange={(e) => setdata({ ...data, Pin: e.target.value })}
                />
              </div>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Professional Info</h4>

            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">
                  Choose your skills
                  <span className="small text-muted">(min 3 skills)</span>
                </label>
                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={data.skill}
                      //   onChange={(e) =>
                      //     setdata({
                      //       ...data,
                      //       Angular: !data["Angular"],
                      //     })
                      //   }
                    />
                    <label className="form-check-label">Angular</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">React</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Node.JS</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">JavaScript</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Flutter</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Java</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-12">
                <label className="form-label">
                  <strong>
                    Experience
                    <span className="small text-muted">
                      (min 2, max 5 items)
                    </span>
                  </strong>
                </label>

                <div className="card mx-3 mt-3">
                  <div className="card-body">
                    <h6 className="card-title text-muted mb-3">
                      Experience #1
                      <a
                        className="float-end text-danger fw-normal"
                        onClick={() => alert("min 2 required")}
                      >
                        Remove
                      </a>
                    </h6>
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setdata({ ...data, companyName1: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">
                          Duration{" "}
                          <span className="text-muted">(in months)</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={(e) =>
                            setdata({ ...data, Duration1: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          Describe your responsibilities
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) =>
                            setdata({
                              ...data,
                              responsibilities1: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mx-3 mt-3">
                  <div className="card-body">
                    <h6 className="card-title text-muted mb-3">
                      Experience #2
                      <a
                        className="float-end text-danger fw-normal"
                        onClick={() => alert("min 2 required")}
                      >
                        Remove
                      </a>
                    </h6>
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setdata({ ...data, companyName2: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">
                          Duration{" "}
                          <span className="text-muted">(in months)</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={(e) =>
                            setdata({ ...data, Duration2: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          Describe your responsibilities
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) =>
                            setdata({
                              ...data,
                              responsibilities2: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {count > 0 || (count < 4 && count > 0) ? (
                  <div>
                    {console.log(count)}
                    <div className="card mx-3 mt-3">
                      <div className="card-body">
                        <h6 className="card-title text-muted mb-3">
                          Experience #{3}
                          <a
                            className="float-end text-danger fw-normal"
                            onClick={() => setcount((prev) => prev - 1)}
                          >
                            Remove
                          </a>
                        </h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-6">
                            <label className="form-label">
                              Duration{" "}
                              <span className="text-muted">(in months)</span>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {count > 1 || count > 4 ? (
                  <div>
                    {console.log(count)}
                    <div className="card mx-3 mt-3">
                      <div className="card-body">
                        <h6 className="card-title text-muted mb-3">
                          Experience #{4}
                          <a
                            className="float-end text-danger fw-normal"
                            onClick={() => setcount((prev) => prev - 1)}
                          >
                            Remove
                          </a>
                        </h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-6">
                            <label className="form-label">
                              Duration{" "}
                              <span className="text-muted">(in months)</span>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {count > 2 || count > 4 ? (
                  <div>
                    {console.log(count)}
                    <div className="card mx-3 mt-3">
                      <div className="card-body">
                        <h6 className="card-title text-muted mb-3">
                          Experience #{5}
                          <a
                            className="float-end text-danger fw-normal"
                            onClick={() => setcount((prev) => prev - 1)}
                          >
                            Remove
                          </a>
                        </h6>
                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-6">
                            <label className="form-label">
                              Duration{" "}
                              <span className="text-muted">(in months)</span>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-12">
                            <label className="form-label">
                              Describe your responsibilities
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <a
                  className="d-block mt-3"
                  onClick={() => setcount((prev) => prev + 1)}
                >
                  Add more experience
                </a>
              </div>
            </div>

            <hr className="my-4" />

            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Save Candidate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Add;
