import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import Loader from '../Loader/Loader';
import './styleBody.css';

function Gaming() {
	// loading const
	const [loading, setLoading] = useState(false);
	// Armazena as as pilhas de 7 cartas retiradas das 21
	const [pile, setPile] = useState({ pile1: [], pile2: [], pile3: [] });
	// Armazena em qual step o game está
	const [gameMode, setGameMode] = useState('STEP0');

	useEffect(() => {
		(async () => {
			setLoading(false);

			const deckResponse = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
			const deckId = deckResponse.data.deck_id;
			const cardsResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=21`);
			setPile({ pile1: cardsResponse.data.cards.slice(0, 7), pile2: cardsResponse.data.cards.slice(7, 14), pile3: cardsResponse.data.cards.slice(14, 21) });

			console.log('finally');
			console.log(cardsResponse);
			setLoading(true);
		})();
	}, []);

	function redistributeCards() {
		const nextPositions = {
			0: 0,
			1: 7,
			2: 14,
			3: 1,
			4: 8,
			5: 15,
			6: 2,
			7: 9,
			8: 16,
			9: 3,
			10: 10,
			11: 17,
			12: 4,
			13: 11,
			14: 18,
			15: 5,
			16: 12,
			17: 19,
			18: 6,
			19: 13,
			20: 20,
		};

		setPile((prevState) => {
			const newCards = [];
			const allCards = [...prevState.pile1, ...prevState.pile2, ...prevState.pile3];
			allCards.forEach((card, index) => {
				newCards[nextPositions[index]] = card;
			});
			return {
				pile1: newCards.slice(0, 7),
				pile2: newCards.slice(7, 14),
				pile3: newCards.slice(14, 21),
			};
		});
	}

	function onClickPile(selectedPile) {
		if (selectedPile === 'pile1') {
			setPile((prevState) => ({
				pile1: prevState.pile3,
				pile2: prevState.pile1,
				pile3: prevState.pile2,
			}));
		} else if (selectedPile === 'pile2') {
			setPile((prevState) => ({
				pile1: prevState.pile3,
				pile2: prevState.pile2,
				pile3: prevState.pile1,
			}));
		} else {
			setPile((prevState) => ({
				pile1: prevState.pile2,
				pile2: prevState.pile3,
				pile3: prevState.pile1,
			}));
		}
		redistributeCards();
	}

	function gameStep0() {
		const cards = useMemo(() => {
			if (pile) {
				return [...pile.pile1, ...pile.pile2, ...pile.pile3];
			}
			return [];
		}, [pile]);
		return (
			<div className="flex flex-col items-center">

				{loading ? <h1 className="text_main">Memorize Your Card And Start Game </h1> : <> </>}

				<div className="cardContent flex flex-row justify-center">
					{loading ? cards.map((card) => <img className="CardStart" src={card.image} key={card.image} alt="card" />) : <Loader />}
				</div>
				{loading ? <button type="button" className="p-2 w-1/3 rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300" onClick={() => (setGameMode('STEP1'))}>Start Game</button> : <> </>}
			</div>
		);
	}

	function gameStep1() {
		return (
			<div className="flex flex-col items-center flex-nowrap">
				<h1 className="text_main">Which pile is your card in?</h1>
				<div>
					<div>
						<button
							type="button"
							className="gameCards pile0"
							onClick={() => {
								onClickPile('pile1');
								setGameMode('STEP2');
							}}
						>
							{pile.pile1.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className=" gameCards pile1 mx-16"
							onClick={() => {
								onClickPile('pile2');
								setGameMode('STEP2');
							}}
						>
							{pile.pile2.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className="gameCards pile2"
							onClick={() => {
								onClickPile('pile3');
								(setGameMode('STEP2'));
							}}
						>
							{pile.pile3.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>
					</div>
				</div>
			</div>

		);
	}
	function gameStep2() {
		return (
			<div className="flex flex-col items-center">
				<h1 className="text_main">Which pile is your card in?</h1>
				<div>
					<div>
						<button
							type="button"
							className="gameCards pile0"
							onClick={() => {
								onClickPile('pile1');

								(setGameMode('STEP3'));
							}}
						>
							{pile.pile1.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className=" gameCards pile1 mx-16"
							onClick={() => {
								onClickPile('pile2');

								(setGameMode('STEP3'));
							}}
						>
							{pile.pile2.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className="gameCards pile2"
							onClick={() => {
								onClickPile('pile3');

								(setGameMode('STEP3'));
							}}
						>
							{pile.pile3.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>
					</div>
				</div>
			</div>
		);
	}
	function gameStep3() {
		return (
			<div className="flex flex-col items-center">
				<h1 className="text_main">Which pile is your card in?</h1>
				<div>
					<div>
						<button
							type="button"
							className="gameCards pile0"
							onClick={() => {
								onClickPile('pile1');

								(setGameMode('STEP4'));
							}}
						>
							{pile.pile1.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className=" gameCards pile1 mx-16"
							onClick={() => {
								onClickPile('pile2');

								(setGameMode('STEP4'));
							}}
						>
							{pile.pile2.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>

						<button
							type="button"
							className="gameCards pile2"
							onClick={() => {
								onClickPile('pile3');

								(setGameMode('STEP4'));
							}}
						>
							{pile.pile3.map((card) => <img className="Card" src={card.image} key={card.image} alt="card" />)}
						</button>
					</div>
				</div>
			</div>
		);
	}
	function gameStep4() {
		const allCards = [...pile.pile1, ...pile.pile2, ...pile.pile3];

		const chooseCards = allCards[10];
		return (

			<div className="flex flex-col items-center">
				<h1 className="text_main">Is this your card?</h1>
				<img className="p-9" src={chooseCards.image} alt="choosed card" />
				<button className="p-2 w-1/3 rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300" type="button">Restart Game</button>
			</div>

		);
	}
	const GAMEMODE = {
		STEP0: gameStep0,
		STEP1: gameStep1,
		STEP2: gameStep2,
		STEP3: gameStep3,
		STEP4: gameStep4,
	};
	return (
		<div id="1">
			<div className="flex flex-col items-center" />
			<div>
				<RenderGameMode setGameMode={setGameMode} />
			</div>
		</div>

	);
}