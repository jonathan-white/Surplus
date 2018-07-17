import React from 'react';
import { Input } from "react-materialize";

const helpCenter = () => (
	<div className="helpCenter">
		<h5 className="center-align title">Help Center</h5>
		<div className="row">
			<div className="col s6">
				<h4> Submit issue below</h4>
				<form>
					<Input s={6} label="First Name" />
					<Input s={6} label="Last Name" />
					<Input type="email" label="Email" s={12} />
					<Input s={12} type='select' label='Choose an Option' icon='report_problem'>
						<option value='1'>I can't Log in</option>
						<option value='2'>Payment error</option>
						<option value='3'>Won't load Image</option>
						<option value='4'>Never recieved item</option>
						<option value='5'>Can't checkout</option>
					</Input>
					<Input type="submit" value="Submit" className="btn"/>
				</form>
			</div>
			<div className="col s6">
				<h4>Frequenty Asked Questions</h4>
				<ul>
					<li>
						<div>
							<h5 className="faq-question">Q: How do I sign up?</h5>
							<p className="faq-answer">A: Click the <span>Sign Up</span> link at the bottom of the page.</p>
						</div>
					</li>
					<li>
						<div>
							<h5 className="faq-question">Q: What if I don't receive my order?</h5>
							<p className="faq-answer">A: Submit a dispute using the <span>Submit a Dispute</span> link below.</p>
						</div>
					</li>
					<li>
						<div>
							<h5 className="faq-question">Q: How do I return an item?</h5>
							<p className="faq-answer">A: Fill out the form to the left and a customer service representative will assist you.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default helpCenter;