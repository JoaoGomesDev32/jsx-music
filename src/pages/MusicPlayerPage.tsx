const MusicPlayer = ({ source }: { source: string }) => {
  return (
    <audio controls>
      <source src={source} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;