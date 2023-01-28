0 - Utilizar o usCallback nas funções getDeck, getCards, getPile, redistributeCards e onClickPile

1-  criar um componete para cara gameStep (gameStep0, gameStep1, gameStep2, gameStep3, gameStep4), e devem receber oque precisarem por meio de "props"

2- melhorar os MODES com o react-router

<!-- 3-   useEffect(() => {
       (async() => {
    const deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deckId = deck.data.deck_id
    const cards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=21`);
    setPile({ pile1: cards.data.slice(0, 7), pile2: cards.data.slice(7, 14), pile3: cards.data.slice(14, 21) });
       })()
  }, [cards]); -->

<!-- 4- colocar um loader -->
<!-- 5- apagar Result -->