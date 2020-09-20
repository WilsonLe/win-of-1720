//import components
import InternetExplorer from "./InternetExplorer";
import Minesweeper from "./Minesweeper";
import ErrorBox from "./ErrorBox";
import MyComputer from "./MyComputer";
import Notepad from "./Notepad";
import Paint from "./Paint";
import ClipKhoi from "./ClipKhoi";
import BaiHatKhoi from "./BaiHatKhoi";
import EasterEgg1 from "./EasterEgg1";
import Yearbook from "./Yearbook";
import MVKhoi from "./MVKhoi";
import Facebook from "./Facebook";

//import icons
import iePaper from "assets/windowsIcons/ie-paper.png";
// import ie from 'assets/windowsIcons/ie.png';
import mine from "assets/minesweeper/mine-icon.png";
import error from "assets/windowsIcons/897(16x16).png";
import computer from "assets/windowsIcons/676(16x16).png";
import computerLarge from "assets/windowsIcons/676(32x32).png";
import notepad from "assets/windowsIcons/327(16x16).png";
// import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import paintLarge from "assets/windowsIcons/680(32x32).png";
import paint from "assets/windowsIcons/680(16x16).png";
import clip_khoi from "assets/windowsIcons/dak12.png";
import bai_hat_khoi from "assets/windowsIcons/dak12.png";
import easter_egg_1 from "assets/windowsIcons/easter_egg_1.png";
import yearbook from "assets/windowsIcons/dak12.png";
import mv_khoi from "assets/windowsIcons/dak12.png";

// const gen = () => {
//   let id = -1;
//   return () => {
//     id += 1;
//     return id;
//   };
// };

// const genId = gen();
// const genIndex = gen();

export const defaultAppState = [
	{
		component: Facebook,
		header: {
			title: "17: /một • bảy • hai • không/",
			icon: yearbook,
		},
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: false,
		minimized: false,
		maximized: true,
		id: 0,
		zIndex: 0,
	},
	// {
	//   component: Yearbook,
	//   header: {
	//     title: "Yearbook 1720.pdf",
	//     icon: yearbook,
	//   },
	//   defaultSize: {
	//     width: 700,
	//     height: 500,
	//   },
	//   defaultOffset: {
	//     x: 130,
	//     y: 20,
	//   },
	//   resizable: false,
	//   minimized: false,
	//   maximized: true,
	//   id: genId(),
	//   zIndex: genIndex(),
	// },
	// {
	//   component: BaiHatKhoi,
	//   header: {
	//     title: "Có bao giờ rời đi?.mp3",
	//     icon: bai_hat_khoi,
	//   },
	//   defaultSize: {
	//     width: 700,
	//     height: 500,
	//   },
	//   defaultOffset: {
	//     x: 130,
	//     y: 20,
	//   },
	//   resizable: false,
	//   minimized: false,
	//   maximized: true,
	//   id: genId(),
	//   zIndex: genIndex(),
	// },
	// {
	//   component: BaiHatKhoi,
	//   header: {
	//     title: "Có bao giờ rời đi?.mp3",
	//     icon: bai_hat_khoi,
	//   },
	//   defaultSize: {
	//     width: 700,
	//     height: 500,
	//   },
	//   defaultOffset: {
	//     x: 130,
	//     y: 20,
	//   },
	//   resizable: false,
	//   minimized: false,
	//   maximized: true,
	//   id: genId(),
	//   zIndex: genIndex(),
	// }
];

export const defaultIconState = [
	{
		id: 11,
		icon: yearbook,
		title: "17: /một • bảy • hai • không/",
		component: Facebook,
		isFocus: false,
	},
	{
		id: 10,
		icon: mv_khoi,
		title: "Có bao giờ rời đi.mp4",
		component: MVKhoi,
		isFocus: false,
	},
	{
		id: 9,
		icon: yearbook,
		title: "Yearbook 1720.pdf",
		component: Yearbook,
		isFocus: false,
	},
	{
		id: 7,
		icon: bai_hat_khoi,
		title: "Có bao giờ rời đi.mp3",
		component: BaiHatKhoi,
		isFocus: false,
	},
	{
		id: 6,
		icon: clip_khoi,
		title: "Clip Khối.mp4",
		component: ClipKhoi,
		isFocus: false,
	},
	// {
	//   id: 0,
	//   icon: ie,
	//   title: 'Internet Explorer',
	//   component: InternetExplorer,
	//   isFocus: false,
	// },
	{
		id: 1,
		icon: mine,
		title: "Minesweeper",
		component: Minesweeper,
		isFocus: false,
	},
	{
		id: 2,
		icon: computerLarge,
		title: "My Computer",
		component: MyComputer,
		isFocus: false,
	},
	// {
	//   id: 3,
	//   icon: notepadLarge,
	//   title: 'Notepad',
	//   component: Notepad,
	//   isFocus: false,
	// },
	{
		id: 5,
		icon: paintLarge,
		title: "Paint",
		component: Paint,
		isFocus: false,
	},
	{
		id: 8,
		icon: easter_egg_1,
		title: "",
		component: EasterEgg1,
		isFocus: false,
	},
];

export const appSettings = {
	"Internet Explorer": {
		header: {
			icon: iePaper,
			title: "InternetExplorer",
		},
		component: InternetExplorer,
		defaultSize: {
			width: 700,
			height: 500,
		},
		defaultOffset: {
			x: 140,
			y: 30,
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 800,
		multiInstance: true,
	},
	Minesweeper: {
		header: {
			icon: mine,
			title: "Minesweeper",
		},
		component: Minesweeper,
		defaultSize: {
			width: 0,
			height: 0,
		},
		defaultOffset: {
			x: 190,
			y: 180,
		},
		resizable: false,
		minimized: false,
		maximized: false,
		multiInstance: true,
	},
	Error: {
		header: {
			icon: error,
			title: "C:\\",
			buttons: ["close"],
			noFooterWindow: true,
		},
		component: ErrorBox,
		defaultSize: {
			width: 380,
			height: 0,
		},
		defaultOffset: {
			x: window.innerWidth / 2 - 190,
			y: window.innerHeight / 2 - 60,
		},
		resizable: false,
		minimized: false,
		maximized: false,
		multiInstance: true,
	},
	"My Computer": {
		header: {
			icon: computer,
			title: "My Computer",
		},
		component: MyComputer,
		defaultSize: {
			width: 660,
			height: 500,
		},
		defaultOffset: {
			x: 260,
			y: 50,
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 800,
		multiInstance: false,
	},
	Notepad: {
		header: {
			icon: notepad,
			title: "Untitled - Notepad",
		},
		component: Notepad,
		defaultSize: {
			width: 660,
			height: 500,
		},
		defaultOffset: {
			x: 270,
			y: 60,
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 800,
		multiInstance: true,
	},
	Paint: {
		header: {
			icon: paint,
			title: "Untitled - Paint",
		},
		component: Paint,
		defaultSize: {
			width: 660,
			height: 500,
		},
		defaultOffset: {
			x: 280,
			y: 70,
		},
		resizable: true,
		minimized: false,
		maximized: window.innerWidth < 800,
		multiInstance: true,
	},
	ClipKhoi: {
		header: {
			icon: clip_khoi,
			title: "Clip Khối.mp4",
		},
		component: ClipKhoi,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: true,
		minimized: false,
		maximized: false,
		multiInstance: false,
	},
	BaiHatKhoi: {
		header: {
			icon: bai_hat_khoi,
			title: "Có bao giờ rời đi.mp3",
		},
		component: BaiHatKhoi,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: true,
		minimized: false,
		maximized: false,
		multiInstance: false,
	},
	EasterEgg1: {
		header: {
			icon: easter_egg_1,
			title:
				"Lần cuối CA1 diễn Như Ngày Hôm Qua trên sân khấu (live audio)",
		},
		component: EasterEgg1,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: false,
		minimized: false,
		maximized: false,
		multiInstance: false,
	},
	Yearbook: {
		header: {
			icon: yearbook,
			title: "Yearbook 1720.pdf",
		},
		component: Yearbook,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: true,
		minimized: false,
		maximized: false,
		multiInstance: false,
	},
	MVKhoi: {
		header: {
			icon: mv_khoi,
			title: "Có bao giờ rời đi.mp4",
		},
		component: MVKhoi,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: true,
		minimized: false,
		maximized: false,
		multiInstance: false,
	},
	"17: /một • bảy • hai • không/": {
		header: {
			icon: yearbook,
			title: "17: /một • bảy • hai • không/",
		},
		component: Facebook,
		defaultSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		defaultOffset: {
			x: 0,
			y: 0,
		},
		resizable: true,
		minimized: false,
		maximized: true,
		multiInstance: false,
	},
};

export { InternetExplorer, Minesweeper, ErrorBox, MyComputer, Notepad };
