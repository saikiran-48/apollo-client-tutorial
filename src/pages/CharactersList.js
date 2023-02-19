import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>oops something is wrong</div>;

  return (
    <div className="list">
      {data.characters.results.map((char) => {
        return (
          <Link to={`/${char.id}`}>
            <img src={char.image} alt="img" />
            <h2>{char.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
