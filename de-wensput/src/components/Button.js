import '../styled-system/styles.css'
import { css } from '../styled-system/css'

const styles = css({
  backgroundColor: 'green.500'
})

export default function Button({ onClick, children }) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
