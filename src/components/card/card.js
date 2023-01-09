import React, { useEffect, useState } from 'react';
import styles from './card.module.css';

function Card() {
  const [data, setData] = useState(null);
  // const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    async function request() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          console.log(response);
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('ERRO AQUI', error);
      }
    }
    request();
  }, []);

  if (!data) return <p>Loading ...</p>;

  const {
    name: { first, last },
    location: {
      timezone: { description },
    },
    dob: { age },
    picture: { medium } = {},
  } = data.results[0];

  return (
    <div className={ styles.container }>
      <h1>{`${first} ${last}, age ${age}`}</h1>
      <p>{description}</p>
      <img src={ medium } alt="Profile" />
      {/* <button
        type="button"
        onClick={ () => setFavorite([...favorite, data.results[0]]) }
      >
        SALVAR
      </button> */}
      {/* <div className="favorites">{'💚 '.repeat(favorite.length)}</div> */}
    </div>
  );
}

export default Card;
