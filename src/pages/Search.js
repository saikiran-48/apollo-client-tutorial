import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = React.useState('');

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>something is wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((char) => {
            return <li>{char.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
