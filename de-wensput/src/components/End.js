import { useState, useEffect } from 'react'

import AudioPlayer from './AudioPlayer'
import Button from './Button'

function End({ wish, handleClick }) {
	const [showElement, setShowElement] = useState(false)

	// Show the button after 5 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowElement(true);
		}, 5000);
	return () => clearTimeout(timer);
	}, []);

	// Fake to click the button after 20 seconds
	useEffect(() => {
        const fakeClickTimer = setTimeout(() => {
            handleClick();
        }, 20000);
        return () => clearTimeout(fakeClickTimer);
    }, [handleClick]);

	return (
		<div className="End">
			<h2>Jouw wens:</h2>
			{wish ?
				<>
					<h1>{wish.name} / {wish.slug}</h1>
					<AudioPlayer audioSrc="/audio/wens.mp3" play={true} volume={1} timeout={1000} loop={false} />
					<AudioPlayer audioSrc={`/audio/games/${wish.slug}.mp3`} play={true} volume={1} timeout={2700} loop={false} />
				</> :
        <>
					<p>Je wens kan helaas niet uitkomen. Probeer het nog eens!</p>
					<AudioPlayer audioSrc="/audio/geen-wens.mp3" play={true} volume={1} timeout={1000} loop={false} />
				</>
			}


			{showElement && (<div>
				<h3>Wil je opnieuw wensen?</h3>
				<Button onClick={handleClick}>Ik wens...</Button>
			</div>)}

		</div>
	)
}

export default End;
