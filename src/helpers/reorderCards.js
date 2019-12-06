export default ({ state, source, destination }) => {
  const { index: sourceCardIndex, droppableId: sourceId } = source;
  const { index: destinationCardIndex, droppableId: destinationId } = destination;

  // get indexes of source and destination columns
  const sourceColumnIndex = parseInt(sourceId.replace('column-', ''));
  const destinationColumnIndex = parseInt(destinationId.replace('column-', ''));

  return state.map((item, currentColumnIndex) => {
    if (destinationColumnIndex === currentColumnIndex) {
      // get active card
      const [sourceCard] = state[sourceColumnIndex].cards.splice(sourceCardIndex, 1);

      // get destination cards array
      const destinationCards = Array.from(state[destinationColumnIndex].cards);

      // put source card in the destination array
      // to the right place
      destinationCards.splice(destinationCardIndex, 0, sourceCard);

      // update cards array
      item.cards = destinationCards;
    }

    return item;
  });
};
