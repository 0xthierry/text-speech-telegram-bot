import { SpeechClient } from '@google-cloud/speech';
import { ApplicationConfig } from '../../config';

async function fromSpeechToText(buffer: Buffer) {
	const client = new SpeechClient({
		projectId: ApplicationConfig.gcp.projectId,
		keyFilename: ApplicationConfig.gcp.credentialsPath,
	});

	const request = {
		audio: {
			content: buffer,
		},
		config: {
			// OGG
			encoding: 6,
			sampleRateHertz: 48000,
			languageCode: 'pt-BR',
		},
	};
	const [response] = await client.recognize(request);

	return response.results
		?.map(result => {
			if (result?.alternatives) {
				return result?.alternatives[0]?.transcript;
			}
		})
		.join('\n');
}

export { fromSpeechToText };
