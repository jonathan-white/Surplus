import React from 'react';
import { Input } from "react-materialize";


const helpCenter = () => (
		<div>
	        <h5 className="center-align helpCenter">Help Center</h5>
				<div className="row">
					<div className="col s6">
						<h4> Submit issue below</h4>
						    <Input s={6} label="First Name" />
						    <Input s={6} label="Last Name" />
						    <Input type="email" label="Email" s={12} />
						        <Input s={12} type='select' label='Choose an Option' icon='report_problem'>
								  <option value='1'>I cant Log in</option>
								  <option value='2'>Payment error</option>
								  <option value='3'>Wont load Image</option>
								  <option value='4'>Never recieved item</option>
								  <option value='5'>Can't checkout</option>
								</Input>
					</div>
					<div className="col s6">
						<h4> 
						FAQ
						</h4>
					</div>
				</div>
		</div>
	);

export default helpCenter;