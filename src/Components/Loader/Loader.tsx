import React from "react";
import { LineWave } from "react-loader-spinner";

const loader = () => {
	return (
		<LineWave
			height="250"
			width="250"
			color="#4fa94d"
			ariaLabel="line-wave"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
			firstLineColor=""
			middleLineColor=""
			lastLineColor=""
		/>
	);
};

export default loader;