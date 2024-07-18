import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//pages
// import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { SkillsMarquee } from "./components/SkillsMarquee";
// import { Achievements } from "./pages/Achievements";
import IntroLanding from './pages/IntroLanding';
//  import { Projects } from "./pages/Projects";
import { Preloader } from "./pages/Preloader";
import { Testimony } from "./pages/Testimony";
import  {FineWorks}  from "./pages/FineWorks";
import {PromotionalVideo} from "./pages/PromotionalVideo";
import {Offers} from "./pages/Offers";

// import { Certificates } from "./pages/Certificates";
// import { Contact } from "./pages/Contact";
// import { Quote } from "./pages/Quote";
import Stack from "./pages/Stack";
// import Jobs from "./pages/Jobs";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import Project from "./pages/Project";


function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		preload().then(() => setLoading(false));
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<>
			
			<Navbar />
			<div className='parent'>
				<div id='home'>
					{/* <Landing /> */}
					<IntroLanding/>
					
				</div>
				<div id='about'>
					<FineWorks/>
					<PromotionalVideo/>
					<Offers/>
					<Project/>
			
					{/* <Jobs />
					<Achievements />
					<Quote /> */}
				</div>
				<div id='projects'>
					<Stack />
					{/*<Projects />*/}
				</div>
				<div id='testimonials'>
					<Testimony />
				</div>
				<div id='contact'>
					{/* <Certificates />
					<Contact /> */}
					<SkillsMarquee />
				</div>
				<Analytics />
				<About />
			</div>
		</>
	);
}

function preload() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3200);
	});
}

export default App;
