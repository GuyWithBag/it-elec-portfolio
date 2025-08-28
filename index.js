const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get(["/", "/index"], (req, res) => {
	res.render("index");
});

app.get("/experience", (req, res) => {
	// Data to be passed to the EJS template
	const data = {
		workExperience: [
			{
				company: "SAMAHAN Systems Development",
				title: "Frontend Developer",
				type: "Full time",
				years: "2023 - Present",
			},
		],
		education: [
			{
				institution: "Ateneo de Davao University",
				degree: "Bachelor of Science - BS, Information Technology",
				years: "Jan 2024 - Mar 2027",
			},
			{
				institution: "Ateneo de Davao University",
				degree: "Bachelor of Science - BS, Computer Engineering",
				years: "Aug 2023 - Apr 2024",
			},
		],
	};
	// Render the EJS template, passing the data
	res.render("experience", data);
});
app.get("/contact", (req, res) => res.render("contact"));
app.get("/projects", (req, res) => {
	// Data to be passed to the EJS template
	const projectsData = [
		{
			name: "SAMAHAN All for more",
			content: `<div><h3>SAMAHAN All for more</h3><p>Under SAMAHAN Systems Development, we have developed and designed an official page for Ateneo's all student organization SAMAHAN</p><br /><p>Hosted and deployed in Ateneo De Davao's official servers and domain. Fully featured full stack website created using NextJs and NestJS.</p></div>`,
			images: ["/images/portfolioImages/samahanAllForMore/home_page.jpg"],
			href: "https://samahan.addu.edu.ph",
			googlePlayHref: null,
		},
		{
			name: "Chain Reaction: Atom Supreme Revamped",
			content: `<div><h3>Chain Reaction Atom Revamped Supreme</h3>is your classic childhood strategy game re-imagined in a much more colorful/modern settings. This revamp shows much more explosive and expressive graphics and animations. <br /><br /><h4>Summary: </h4><ul><li>Win the game by capturing all the enemy's atoms / colors by expanding your army of atoms in a strategic way by overloading your atoms. Which will start a chain reaction showing a colorful firework display until it destroys your enemies!</li></ul></div>`,
			images: [
				"/images/portfolioImages/chainReactionGame/gameplay.png",
				"/images/portfolioImages/chainReactionGame/main_menu.png",
				"/images/portfolioImages/chainReactionGame/maps_2.png",
				"/images/portfolioImages/chainReactionGame/maps.png",
				"/images/portfolioImages/chainReactionGame/multiple_players_1.png",
				"/images/portfolioImages/chainReactionGame/multiple_players_2.png",
				"/images/portfolioImages/chainReactionGame/victory.png",
			],
			href: null, // No top-level href, but action has one
			googlePlayHref:
				"https://play.google.com/store/apps/details?id=org.MacchiMatchaProductions.ChainReactionAtomRevampedSupreme",
		},
		{
			name: "NextJS E-Commerce",
			href: "https://e-commerce-app-flame.vercel.app/",
			content: `<div><h3>Responsive E-Commerce Website With Functionalities</h3><div><p>Created a functional E-Commerce website that looks and functions similar to a real E-Commerce website.. </p><br /><h4>Features: </h4><ul><li>Add an item to cart (With their amount you want to add).</li><li>You can add an item to your wishlist. </li><li>You can view your shopping cart. </li><li>State management is stored in the URL so you can share it with your friends!</li><li>You can share the link to that product with your friends! - Animated banner</li></ul></div></div>`,
			images: [
				"/images/portfolioImages/eCommerceApp/home_page_2.png",
				"/images/portfolioImages/eCommerceApp/home_page_dark_mode.png",
				"/images/portfolioImages/eCommerceApp/home_page.png",
				"/images/portfolioImages/eCommerceApp/product_page.png",
				"/images/portfolioImages/eCommerceApp/shopping_cart.png",
				"/images/portfolioImages/eCommerceApp/shopping_cart_2.png",
				"/images/portfolioImages/eCommerceApp/wish_list.png",
			],
			googlePlayHref: null,
		},
		{
			name: "Music Player",
			content: `<div><h3>Music Player</h3><div><p>I was tired of finding things that are lacking in most music players. So i have decided to make my own! This is a work-in-progress project that aims to have a cloud containing all your music that you have downloaded shared across various platforms.</p><br /><p>Not only that, but it will have an option where you can play the music while overlapping with other audios.</p></div></div>`,
			images: [
				"/images/portfolioImages/musicPlayer/add_to_playlist.jpg",
				"/images/portfolioImages/musicPlayer/audio_player.jpg",
				"/images/portfolioImages/musicPlayer/playlist_list.jpg",
				"/images/portfolioImages/musicPlayer/playlist_page.jpg",
				"/images/portfolioImages/musicPlayer/search_results.jpg",
				"/images/portfolioImages/musicPlayer/search.jpg",
				"/images/portfolioImages/musicPlayer/settings.jpg",
				"/images/portfolioImages/musicPlayer/song_list_drag.jpg",
				"/images/portfolioImages/musicPlayer/song_more_options.jpg",
			],
			href: null,
			googlePlayHref: null,
		},
		{
			name: "Morse Code Torch",
			content: `<div><h3>Morse Code Torch</h3><div><p>A fun, useful app that you and your friends can use in order to communicate to each other at night in long distances using your flashlight.</p><br /><h4>Features: </h4><ul class="list-disc pl-5"><li>Save your previous morse codes </li><li>Change the duration of each unit </li><li>Morse-code to text, text to Morse-code </li></ul></div></div>`,
			images: [
				"/images/portfolioImages/morseCodeTorch/home_page.png",
				"/images/portfolioImages/morseCodeTorch/morse_code_write.png",
				"/images/portfolioImages/morseCodeTorch/save_history.png",
				"/images/portfolioImages/morseCodeTorch/save.png",
			],
			href: null,
			googlePlayHref: null,
		},
	];
	res.render("projects", { projects: projectsData });
});

app.use((req, res) => res.status(404).render("error"));

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
);
