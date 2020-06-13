import { api } from '../../config';

async function downloadAudio(link: string): Promise<Buffer> {
	const response = await api.get(link, {
		responseType: 'arraybuffer',
		headers: {
			'Content-Type': 'audio/ogg;codecs=opus',
		},
	});
	return Buffer.from(response.data);
}

export { downloadAudio };
