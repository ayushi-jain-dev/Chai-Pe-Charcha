import React from 'react';
import loading from "../../assets/images/loading.gif"

const Spinner = () => {

	return (
		<div className="text-center">
			<img className="my-3" style={{height: "50px", width: "50px"}} src={loading} alt="loading"></img>
		</div>
	);
}
export default Spinner;