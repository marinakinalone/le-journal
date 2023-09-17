export interface IMusicCreditProps {
  game: string;
  artist: string;
  song: string;
}

const MusicCredit = ({ game, artist, song }: IMusicCreditProps) => {
  return (
    <li>
      <h3>{`x ${game}`}</h3>
      <p>{`${artist} - ${song}`}</p>
    </li>
  )
}

export default MusicCredit
