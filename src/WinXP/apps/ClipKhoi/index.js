import React from "react";
const ClipKhoi = ({ onClose, isFocus }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				position: "relative",
			}}
		>
			<iframe
				src="https://www.youtube.com/embed/SbbNp293ZBQ?rel=0&amp;modestbranding=1;autoplay=1"
				allow="autoplay"
				allowFullScreen
				title="Clip Khối 1720!"
				style={{
					display: "block",
					width: "100%",
					height: "97%",
				}}
			/>
			{!isFocus && (
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						left: 0,
						top: 0,
					}}
				/>
			)}
		</div>
	);
};
export default ClipKhoi;
