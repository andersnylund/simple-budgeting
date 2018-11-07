import React from 'react';
import PropTypes from 'prop-types';

import { Draggable } from 'react-beautiful-dnd';

const Party = ({ party, index }) => {
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',

    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  return (
    <div>
      <Draggable draggableId={party} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          >
            {party}
          </div>
        )}
      </Draggable>
    </div>
  );
};

Party.propTypes = {
  party: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Party;