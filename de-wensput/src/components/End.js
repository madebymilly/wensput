import AudioPlayer from './AudioPlayer'

function End({ wish }) {
	return (
		<div className="End" style={{ color: 'red' }}>
			<h2>Jouw wens:</h2>
			{wish ?
				<>
					<h1>{wish.name}</h1>
					<p>
            Categorieen:
            {wish.productCategories.nodes.length > 0 ?
              wish.productCategories.nodes.map(({ name }) => (
                <span key={name}> {name} - </span>
              )) : ''
            }
          </p>
          <p>
            Tags:
            {wish.productTags.nodes.length > 0 ?
              wish.productTags.nodes.map(({ name }) => (
                <span key={name}> {name} - </span>
              )) : ''
            }
          </p>
         {wish.allPaMinAantalSpelers.nodes.length > 0 ? <p>Min. aantal spelers: {wish.allPaMinAantalSpelers.nodes[0].slug}</p> : ''}
         {wish.allPaSpeelduur.nodes.length > 0 ? <p>Speelduur: {wish.allPaSpeelduur.nodes[0].slug}</p> : ''}
				</> : <p>Geen spel gevonden</p>}
			<AudioPlayer audioSrc="/audio/games/7-wonders-duel.mp3" play={true} volume={1} timeout={1000} loop={false} />
		</div>
	)
}

export default End;
