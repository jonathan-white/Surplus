import React from "react";
import Input from "react-materialize/lib/Input";

const NewProduct = props => (
	<div>
		<div className="row">
			<div className="profile">
				<h5>Add a product</h5>
				<form
					className="row"
					method="post"
					encType="multipart/form-data"
					action="api/uploads/"
					onSubmit={props.handlePicUpload}
				>
					<label htmlFor="fileUpload">
						<div className="profile-img">
							<img
								src={props.image || "https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png"}
								alt={props.title}
							/>
							<a className="btn-floating btn-large waves-effect waves-light red">
								<i className="material-icons">add</i>
							</a>
						</div>
					</label>
					<input id="fileUpload" type="file" name="fileUpload" />
					<input type="submit" value="Submit"/>
				</form>
				<form className="row">
					<Input
						s={12}
						type="text"
						label="Title (required)"
						value={props.title}
						name="title"
						onChange={props.handleInputChange}
					/>
					<Input
						s={12}
						type="textarea"
						label="Description"
						value={props.description}
						name="description"
						onChange={props.handleInputChange}
					/>
					<Input
						s={12}
						type="number"
						label="Price per unit"
						value={props.price}
						name="price"
						onChange={props.handleInputChange}
					/>
					<Input
						s={12}
						type="number"
						label="Quantity"
						value={props.quantity}
						name="quantity"
						onChange={props.handleInputChange}
					/>
					<button
						className="btn center-align"
						onClick={props.handleFormSubmit}
					>
					Submit
					</button>
				</form>
			</div>
		</div>
	</div>
)

export default NewProduct;
