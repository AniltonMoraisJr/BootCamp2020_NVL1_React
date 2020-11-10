import React, { useContext } from 'react';
import ListContext from './ListContext';

// import { Container } from './styles';

const ListItem = ({ data }) => {
  const { handleRemoveRepository } = useContext(ListContext);
  return (
    <li>
        <span>{data.title}</span>
        <button onClick={() => handleRemoveRepository(data.id)}>
          Remover
        </button>
    </li>
  )
}

export default ListItem;