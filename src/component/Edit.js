import { RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Add1() {
	const { id } = useParams()
	console.log(id);

	const navigate = useNavigate();
	const [count, setcount] = useState(0);
	const candidate = JSON.parse(localStorage.getItem("list")) ?
		JSON.parse(localStorage.getItem("list")) : [];
	const list = []

	console.log(candidate);


	// const [form, setform] = useState(candidate.find((data, index) => data.id === id))

	const [data, setdata] = useState(candidate.find((data, index) => data.id === id));


	console.log(data);

	const handleSubmit = () => {

		let index = candidate.findIndex((x) => x.id === id)
		candidate.splice(index, 1, data);
		localStorage.setItem("list", JSON.stringify(candidate))

		navigate("/list");
		// console.log(data);
		// list.push(data);
		// console.log(list);
		// setcandidate([...candidate, data])
		// console.log(candidate);

		// setdata({
		// 	id: "",
		// 	firstname: "",
		// 	lastname: "",
		// 	Gender: "",
		// 	Email: "",
		// 	Address: "",
		// 	country: "",
		// 	State: "",
		// 	Pin: "",
		// 	skill: [],

		// 	experiance: [
		// 		{
		// 			id: uuidv4(),
		// 			companyName: "",
		// 			Duration: null,
		// 			responsibilities: "",
		// 		},
		// 		{
		// 			id: uuidv4(),
		// 			companyName: "",
		// 			Duration: null,
		// 			responsibilities: "",
		// 		},
		// 	]
		// })
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(candidate))
	}, [list])



	// useEffect(() => {
	//     // localStorage.setItem("list", JSON.stringify(candidate));
	// }, [candidate]);

	// console.log(candidate);

	const addExperience = () => {
		if (count <= 2) {
			setcount(prev => prev + 1)
			setdata({
				...data, experiance: [...data.experiance,
				{
					id: uuidv4(),
					companyName: "",
					Duration: null,
					responsibilities: ""
				}]
			})
		}
		else {
			alert("max 5 experiances")
		}

		console.log(data.experiance);
	}


	const handleSkills = (value) => {
		setdata({ ...data, skill: data.skill.includes(value) ? data.skill.filter(val => val !== value) : [...data.skill, value] })
	}


	const removeExperience = (index) => {
		setcount(prev => prev - 1)
		if (count >= 1) {
			setdata({ ...data, experiance: data.experiance.filter((dat, ind) => ind !== index) })
		}
		else {
			alert()
		}
	}

	const handleExperiance = (e, index) => {
		console.log(e.target.value);
		console.log(index);

		let arr = [...data.experiance]
		arr[index] = { ...arr[index], [e.target.name]: e.target.value }
		setdata({
			...data, experiance: arr
		})

		// console.log(data.experiance[0].companyName);

	}

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

									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"

											value={"Male"}
											checked={data.Gender === 'Male'}
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
											checked={data.Gender === 'female'}
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
											checked={data.Gender === 'other'}
											onChange={(e) =>
												setdata({ ...data, Gender: e.target.value })
											}
										/>
										<label className="form-check-label">Other</label>
									</div>

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
									value={data.Address}
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
										<input className="form-check-input" type="checkbox" value={"Angular"} checked={data.skill.includes('Angular')} onChange={e => handleSkills(e.target.value)} />

										<label className="form-check-label">Angular</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" value={"React"} checked={data.skill.includes('React')} onChange={e => handleSkills(e.target.value)} />
										<label className="form-check-label">React</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" value={"Node.JS"} checked={data.skill.includes('Node.JS')} onChange={e => handleSkills(e.target.value)} />
										<label className="form-check-label">Node.JS</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" value="JavaScript" checked={data.skill.includes('JavaScript')} onChange={e => handleSkills(e.target.value)} />
										<label className="form-check-label">JavaScript</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" value={"Flutter"} checked={data.skill.includes('Flutter')} onChange={e => handleSkills(e.target.value)} />
										<label className="form-check-label">Flutter</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" value={"Java"} checked={data.skill.includes('Java')} onChange={e => handleSkills(e.target.value)} />
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

								{
									data.experiance.map((dat, index) => {
										return (
											<div key={dat.index} className="card mx-3 mt-3">
												<div className="card-body">
													<h6 className="card-title text-muted mb-3">
														Experience #{index + 1}
														<span style={{ cursor: 'pointer' }} className="float-end text-danger fw-normal" onClick={() => removeExperience(index)} >Remove</span>
													</h6>
													<div className="row g-3">
														<div className="col-6">
															<label className="form-label">Company Name</label>
															<input type="text" className="form-control" value={dat.companyName}
																name="companyName"
																onChange={(e) => handleExperiance(e, index)}

																required
															/>
														</div>
														<div className="col-6">
															<label className="form-label">Duration <span className="text-muted">(in months)</span></label>
															<input type="number" className="form-control" value={dat.Duration}
																name="Duration"
																onChange={(e) => handleExperiance(e, index)}
																required />
														</div>
														<div className="col-12">
															<label className="form-label">Describe your responsibilities</label>
															<textarea className="form-control" value={dat.responsibilities}
																name="responsibilities"
																onChange={(e) => handleExperiance(e, index)}
																// onChange={(e) => setdata({ ...data, experiance: data.experiance.map((dat, ind) => index === ind ? { responsibilities: e.target.value } : "") })} 

																// onChange={(e)=>{
																//     data.experiance.map((data,ind)=>{})
																// }}


																required ></textarea>
														</div>
													</div>
												</div>
											</div>
										)

									})
								}
								<a
									className="d-block mt-3"
									onClick={addExperience}
								>
									Add more experience
								</a>
							</div>
						</div>

						<hr className="my-4" />

						<button
							className="btn btn-primary"
							type="submit"
							onClick={handleSubmit}
						>
							Save Candidate
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Add1;
