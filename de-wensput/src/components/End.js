import { useState, useEffect } from 'react'

import AudioPlayer from './AudioPlayer'
import Coin from './Coin'

function End({ wish, handleClick }) {
	const [showElement, setShowElement] = useState(false)
	const [showWishTitle, setShowWishTitle] = useState(false)

	// Show the button after 6 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowElement(true);
		}, 6000);
	return () => clearTimeout(timer);
	}, []);

	// Fake to click the button after 20 seconds
	useEffect(() => {
		const fakeClickTimer = setTimeout(() => {
				handleClick();
		}, 20000); // 20000ms = 20 seconds
		return () => clearTimeout(fakeClickTimer);
	}, [handleClick]);

	// Show the wish title after 3 seconds
	useEffect(() => {
		const wishTimer = setTimeout(() => {
			setShowWishTitle(true);
		}, 3000);
		return () => clearTimeout(wishTimer);
	}, []);

	console.log('wish:', wish);

	return (
		<div className="End">
			<div className="End__header">
			<h3>Jouw wens:</h3>
			{wish ?
				<>
					{showWishTitle && (
						<>
							<h2 className="End__title">{wish.name}</h2>
							<p>
								{wish.productCategories?.nodes?.map((category, index) => (
									category.slug !== 'bordspellen' && (
										
										<span key={category}>
											{category.name}
											{index < wish.productCategories.nodes.length - 1 && ', '}
										</span>
										

									)
								))}
							</p>
							<p>
								{wish.productTags?.nodes?.map((tag, index) => (
									<span key={tag}>
										{tag.name}
										{index < wish.productTags.nodes.length - 1 && ', '}
									</span>
								))}
							</p>
						</>
					)}
					<AudioPlayer audioSrc="/audio/sound-wish.mp3" play={true} volume={1} timeout={1500} loop={false} />
					<AudioPlayer audioSrc="/audio/wens.mp3" play={true} volume={1} timeout={500} loop={false} />
					<AudioPlayer audioSrc={`/audio/games/${wish.slug}.mp3`} play={true} volume={1} timeout={3000} loop={false} />
				</> :
        <>
					<p>Je wens kan helaas niet uitkomen. Probeer het nog eens!</p>
					<AudioPlayer audioSrc="/audio/sound-wish.mp3" play={true} volume={1} timeout={500} loop={false} />
					<AudioPlayer audioSrc="/audio/geen-wens.mp3" play={true} volume={1} timeout={1500} loop={false} />
				</>
			}
			</div>

			{showElement && (<div className="End__button"	>
				<Coin onClick={handleClick}>Doe een nieuwe wens</Coin>
			</div>)}

		</div>
	)
}

export default End;
