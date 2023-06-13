import './GameList.css';
import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import Loading from './Loading';

import axios from 'axios';

export default function GamesList() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/games.php`,
      proxy: 'http://www.games.kovakreative.com'
    })
      .then(res => {
        console.log(res);
        const games = res.data.games.filter(g => g.classification === 'game').filter(g => g.published).sort((a, b) => {
          const dateA = new Date(a.published_at || Date.now());
          const dateB = new Date(b.published_at || Date.now());
          return dateB - dateA;
        });
        setGames(games);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gameCards = games.slice(0, 6).map((g, i) => {
    return <GameCard key={i} title={g.title} description={g.short_text} url={g.url} published={g.published_at} image={g.cover_url} />;
  });

  return (
    <div className='GameList'>
      <h1>Games</h1>
      <section className='game-cards'>
        {games.length ? gameCards : <Loading message="Retrieving games." />}
      </section>
    </div>
  );

};