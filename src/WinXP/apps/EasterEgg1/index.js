import React, { useEffect } from "react";

const EasterEgg1 = ({ onClose, isFocus }) => {
	useEffect(() => {
		return () => {
			console.log("aaa");
		};
	}, []);

	return (
		<div style={{ background: "white", height: "100%", width: "auto" }}>
			<iframe
				title="soundcloud embed"
				width="100%"
				height="100%"
				scrolling="no"
				frameborder="no"
				allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/880969213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
			></iframe>
			<div
				style={{
					"font-size": "10px",
					color: "#cccccc",
					"line-break": "anywhere",
					"word-break": "normal",
					overflow: "hidden",
					"white-space": "nowrap",
					"text-overflow": "ellipsis",
					"font-family":
						"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
					"font-weight": "100",
				}}
			>
				<a
					href="https://soundcloud.com/le-minh-232688405"
					title="CA1#1720"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#cccccc",
						"text-decoration": "none",
					}}
				>
					CA1#1720
				</a>{" "}
				·{" "}
				<a
					href="https://soundcloud.com/le-minh-232688405/nhu-ngay-hom-qua"
					title="Như ngày hôm qua"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#cccccc", "text-decoration": "none" }}
				>
					{" "}
					Như ngày hôm qua
				</a>
			</div>
		</div>
	);
};
export default EasterEgg1;
