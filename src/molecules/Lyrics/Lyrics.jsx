import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLyrics } from '../../contexts/Lyrics/LyricsContext';
import { trackGet } from '../../constants';

const Lyrics = () => {
	const { trackDetail, setTrackDetail } = useLyrics();
	const { commontrack_id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		// Aquí puedes hacer una solicitud a la API para obtener los detalles de la canción
		fetch(trackGet(commontrack_id))
			.then((response) => response.json())
			.then((data) => {
				// Suponiendo que la estructura de respuesta es data.message.body.track
				setTrackDetail(data.message.body.track);
			})
			.catch((error) => {
				console.error(
					'Hubo un error al obtener los detalles de la canción:',
					error
				);
			});
	}, [commontrack_id, setTrackDetail]);

	if (!trackDetail) return <p>Cargando...</p>;

	return (
		<div>
			<h1>
				{trackDetail.track_name} - {trackDetail.artist_name}
			</h1>
			{/* Aquí puedes recortar los párrafos según el ejemplo visual */}
			<p>{trackDetail.lyrics_body}</p>
			<p>ID del Álbum: {trackDetail.album_id}</p>
			<p>
				Género:{' '}
				{trackDetail.primary_genres.music_genre_list[0]?.music_genre
					.music_genre_name || 'N/A'}
			</p>
			<p>Letra explícita: {trackDetail.explicit === 1 ? 'Yes' : 'No'}</p>
			<p>Fecha de liberación: {trackDetail.first_release_date}</p>
			<button onClick={() => navigate('/')}>Go Back</button>
		</div>
	);
};

export default Lyrics;
