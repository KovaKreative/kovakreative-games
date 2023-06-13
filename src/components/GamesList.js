import './GameList.css';
import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import Loading from './Loading';

import axios from 'axios';

export default function GamesList() {

  const [games, setGames] = useState([]);

  const KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {

    axios({
      method: 'GET',
      url: `/api/1/${KEY}/my-games`,
      proxy: 'http://itch.io'
    })
      .then(res => {
        const games = res.data.games.filter(g => g.classification === 'game').filter(g => g.published).sort((a, b) => {
          const dateA = new Date(a.published_at || Date.now());
          const dateB = new Date(b.published_at || Date.now());
          return dateB - dateA;
        });
        setGames(games);
      })
      .catch(err => console.log(err));

  }, []);

  const gameCards = games.slice(0, 6).map((g, i) => {
    return <GameCard key={i} title={g.title} description={g.short_text} url={g.url} published={g.published_at} image={g.cover_url} />;
  });

  return (
    <section className='GameList'>
      <h1>Games</h1>
      {games.length ? gameCards : <Loading message="Retrieving games from itch.io"/>}
    </section>
  );

}