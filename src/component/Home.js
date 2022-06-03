import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import classnames from 'classnames'

function Home() {
	const { register, control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			experience: [{
				companyName: '', duration: '', responsibilities: '',
				companyName: '', duration: '', responsibilities: ''
			}]
		}
	})
	const onSubmit = data => console.log(data)
	console.log(errors)
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'experience'
	})
	return (
		<div>
			<div className='container py-5'>
				<div className='card border-1 shadow w-100 mx-auto p-3'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<label htmlFor="fullname">Full Name</label>
							<input
								type="text"
								className={classnames("form-control", { "is-invalid": errors.fullName })}
								id="fullname"
								placeholder="Enter Your Full Name"
								{...register('fullName', {
									required: "This Field is required", minLength: {
										value: 4,
										message: 'Name should be min 4 characters'
									}
								})}
							/>
							{errors.fullName && <div className='invalid-feedback'>{errors.fullName.message} </div>}
						</div>
						<div className="form-group">
							<label htmlFor="email">E-mail Address</label>
							<input
								type="text"
								className={classnames("form-control", { "is-invalid": errors.email })}
								id="email"
								placeholder="Enter Your E-mail Address"
								{...register('email', {
									required: 'This Field is required',
									pattern: {
										value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: 'Please Enter valid E-mail address'
									}
								})}
							/>
							{errors.email && <div className='invalid-feedback'>{errors.email.message} </div>}
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone Number</label>
							<input
								type="text"
								className={classnames("form-control", { 'is-invalid': errors.phone })}
								id="phone"
								placeholder="Enter Your Phone Number"
								{...register('phone', {
									required: 'This Field is required',
									pattern: {
										value: /^\d{10}$/,
										message: 'Please Enter valid 10 digit Phone number'
									}
								})}
							/>
							{errors.phone && <div className='invalid-feedback'>{errors.phone.message}</div>}
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="text"
								className={classnames("form-control", { "is-invalid": errors.password })}
								id="password"
								placeholder="Enter Your Password"
								{...register('password', {
									required: 'Password is required',
									pattern: {
										value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
										message: 'Password should be containing Uppercase, lowercase,number/specialCharacter and minimum 8 characters'
									}
								})}
							/>
							{errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
						</div>
						<div className="form-group">
							<label htmlFor="state">Choose Your State</label>
							<select className={classnames("form-control", { 'is-invalid': errors.state })} id="state" {...register('state', {
								required: "Please select state"
							})}>
								<option value="">--- Select Your State ---</option>
								<option value="Jharkhand">Jharkhand</option>
								<option value="Assam">Assam</option>
								<option value="Meghalaya">Meghalaya</option>
								<option value="Punjab">Punjab</option>
							</select>
							{errors.state && <div className='invalid-feedback'>{errors.state.message}</div>}
						</div>
						<div className="form-group">
							<label htmlFor="gender" className="mr-4">Choose Your Gender</label>
							<div className={classnames("form-check form-check-inline", { 'is-invalid': errors.gender })}>
								<input
									className="form-check-input"
									type="radio"
									id="male"
									value="male"
									name="gender"
									{...register('gender', {
										required: "Please select Gender"
									})}
								/>
								<label className="form-check-label" htmlFor="male">male</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									id="female"
									value="female"
									name="gender"
									{...register('gender', {
										required: "Please select Gender"
									})}
								/>
								<label className="form-check-label" htmlFor="female">female</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									id="other"
									value="other"
									name="gender"
									{...register('gender', {
										required: "Please select Gender"
									})}
								/>
								<label className="form-check-label" htmlFor="other">other</label>
							</div>
							{errors.gender && <div className='invalid-feedback'>{errors.gender.message}</div>}
						</div>
						<div className="form-group">
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="checkbox" id="tnc" name="tnc"
									{...register('tnc', {
										required: "This field is required"
									})}
								/>
								<label className="form-check-label" htmlFor="tnc"
								>I agree all terms & conditions</label>
							</div>
							<small className='text-danger'>
								{errors.tnc && errors.tnc.message}
							</small>
						</div>
						<hr></hr>
						<div className="form-group">
							<label className="form-check-label mt-1">Experience</label>
						</div>

						{fields.map((one, index) => <div key={index} className='card shadow p-2 mb-3'>
							<div className='row mx-auto w-100 pt-2 pb-2'>
								<div className='col-md-6 d-flex '>
									<label className="form-check-label mt-1">Company Name</label>
									<input
										className={classnames('form-control w-50 ml-4', { 'is-invalid': errors.experience ? errors.experience[index].companyName : false })}
										placeholder='Company name'
										{...register(`experience.${index}.companyName`, {
											required: "This is required"
										})}
									/>
								</div>
								<div className='col-md-6 d-flex'>
									<label className="form-check-label mt-1">Experience</label>
									<input type='number'
										className={classnames('form-control w-50 ml-4', { 'is-invalid': errors.experience ? errors.experience[index].duration : false })}
										placeholder='Experience in months'
										{...register(`experience.${index}.duration`, {
											required: "This is required", min: {
												value: 6, message: "Minimum 6 months"
											}
										})}
									/>
								</div>
								<div className='col-md-6 text-center text-danger mx-auto p-0 '>
									<small>
										{errors.experience ? errors.experience[index].companyName ? errors.experience[index].companyName.message : '' : ''}
									</small>
								</div>

								<div className='col-md-6 text-center text-danger mx-auto p-0 '>
									<small>
										{errors.experience ? errors.experience[index].duration ? errors.experience[index].duration.message : '' : ''}
									</small>
								</div>
								<div className='col-md-12 mx-auto p-0 '>
									<div className='col-md-6 d-flex mt-2'>
										<label className="form-check-label mt-1">Responsibilities:</label>
										<textarea
											className={classnames('form-control w-50 ml-4', { 'is-invalid': errors.experience ? errors.experience[index].responsibilities : false })}
											placeholder='Describe Responsibilities'
											{...register(`experience.${index}.responsibilities`, {
												required: "This is required"
											})}
										/>
									</div>
								</div>
								<div className='col-md-6 text-center text-danger mx-auto p-0 '>
									<small>
										{errors.experience ? errors.experience[index].responsibilities ? errors.experience[index].responsibilities.message : '' : ''}
									</small>
								</div>
								<div className='col-md-6 d-flex mt-2'>
									<a className="d-clock mt-2 w-25" onClick={() => { remove(index) }}>Remove</a>
								</div>
							</div>
						</div>
						)}


						<a className="d-clock mt-2 w-25" onClick={() => append({ companyName: '', duration: '', responsibilities: '' })}>Add more Experience</a>
						<br></br>
						<button type='submit' className="btn btn-primary mt-4">Create New Account</button>
					</form>
				</div>

			</div>
		</div>
	)
}

export default Home