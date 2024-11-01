import { FC } from "react";

type DividerProps = {
	width: number; 
};

const Divider: FC<DividerProps> = ({ width }) => {
	return (
		<div
			className={`min-h-[2px] max-h-[2px] bg-accent`}
			style={{
				minWidth: `${width}%`,
				maxWidth: `${width}%`,
				width: `${width}%`,
			}} 
		></div>
	);
};

export default Divider;
