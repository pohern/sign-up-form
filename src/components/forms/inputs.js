import { Form, useField } from "formik";
import styled from "styled-components";
import ReactSelect from "react-select";
import * as Fields from "./fields";
import { designFields } from "../Form/fields";

const Input = styled.input`
	display: inline-block;
	padding: 0.75em;
	margin: 0.75em;

	cursor: pointer;
	background-color: black;
	border: 1px solid #f25187;
	/* text-decoration: underline; */
	color: #fefefe;
`;

const Label = styled.label`
	color: #fefefe;
`;

// export const SelectInputStyle = styled.select`
// --webkit-appearance: none;
// --moz-appearance: none;
// border:none;
// border-bottom: 1px solid #F25187;
// background-color: transparent;
// text-decoration: none;
// color:  #F25187;
// `

export const FormStyling = {
	container: (provided, state) => ({
		...provided,
		width: 200,
	}),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor:'black',
    color: 'white'
  }),
	// input: (provided, state) => ({
	//   display:
	// }),
	option: (provided, state) => ({
		...provided,
		borderBottom: "1px solid #F25187",
		color: "black",
		backgroundColor: "#562636",
		padding: 5,
		width: 200,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		backgroundColor: "black",
		color: "white",
	}),
	multiValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "white",
	}),
	// singleValue: (provided, state) => {
	// 	const opacity = state.isDisabled ? 0.5 : 1;
	// 	const transition = "opacity 300ms";

	// 	return { ...provided, opacity, transition };
	// },
};

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			<Input
				placeholder="Type response here..."
				type="text"
				className="text-input"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const SelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
  let bananas = []
  function createSelectors() {
    designFields.map(fields => {
      fields.choices.map(choice => {
         bananas.push({value: `${choice}`, label: `${choice}`})
      })
    })
  }
  createSelectors()
	return (
		<div>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			{/* {console.log(designFields)} */}
			<ReactSelect styles={FormStyling} options={bananas}>
				{/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
			</ReactSelect>

			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};
