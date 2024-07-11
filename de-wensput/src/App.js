import './styled-system/styles.css'
import { css } from './styled-system/css'
import WishingWell from './components/WishingWell'

function App() {
  return (
    <div className={css({ bg: 'red.400' })}>
      <WishingWell />
    </div>
  );
}

export default App;
