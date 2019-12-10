export default ({ columns, source, destination }) => {
  const { index: sourceCardIndex, droppableId: sourceId } = source;
  const { index: destinationCardIndex, droppableId: destinationId } = destination;

  // get indexes of source and destination columns
  const sourceColumnIndex = parseInt(sourceId.replace('column-', ''));
  const destinationColumnIndex = parseInt(destinationId.replace('column-', ''));

  return columns.map((column, currentColumnIndex) => {
    if (destinationColumnIndex === currentColumnIndex) {
      // get source card
      const [sourceCard] = columns[sourceColumnIndex].cards.splice(sourceCardIndex, 1);

      // get destination array of cards
      const destinationCards = Array.from(columns[destinationColumnIndex].cards);

      // put source card in destination array
      // to the right place
      destinationCards.splice(destinationCardIndex, 0, sourceCard);

      // update cards array
      column.cards = destinationCards;
    }

    return column;
  });
};
