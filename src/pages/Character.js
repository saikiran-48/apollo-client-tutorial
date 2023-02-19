import React from 'react';
import { useParams } from 'react-router-dom';
import { useList } from '../hooks/useCharacters';
import './CharacterList.css';

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useList(id);

  if (error) return <div>something is wrong</div>;

  if (loading) return <div>Loading.....</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} alt={Image} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
