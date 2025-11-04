import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <CharacterCounter minWords={100} maxWords={500} targetReadingTime={3} />
    </div>
  );
}

export default App;
