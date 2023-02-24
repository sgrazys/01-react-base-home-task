import './App.css';
import Greeting from './Components/Greeting';
import RandomText from './Components/RandomText';
import Number from './Components/Number';
import RandomText2 from './Components/RandomText2';
import DaugTeksto from './Components/DaugTeksto';

function App() {
	const randomText = 'Bet koks tekstas';
	const rndNum = Math.floor(Math.random() * 2 + 1);

	const rndText1 = 'Jurga, galvoji teksta?';
	const rndText2 = 'Enzo, siulo teksta....';

	const rndColor = 'orange';

	return (
		<div className='App'>
			<Greeting />
			<RandomText text={randomText} />
			<Number num={rndNum} />
			<RandomText2 text={rndText1} text2={rndText2} />
			<DaugTeksto text={rndText1} text2={rndText2} color={rndColor} />
		</div>
	);
}

export default App;
