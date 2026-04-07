import Coin from './Coin'

function Start({ handleClick, content }) {

  return (
    <div className="Start">
      <div className="Start__header">
        <h1>De Wensput</h1>
        <h3>waarmee dromen spellen worden</h3>
      </div>
      <div className="Start__buttons">
        <Coin onClick={handleClick}>{content}</Coin>
      </div>
    </div>
  )
}

export default Start;
