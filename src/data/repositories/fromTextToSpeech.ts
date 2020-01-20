import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { ApplicationConfig } from '../../config';

async function fromTextToSpeech(text: string) {
	const client = new TextToSpeechClient({
		projectId: ApplicationConfig.gcp.projectId,
		keyFilename: ApplicationConfig.gcp.credentialsPath,
	});
	const request = {
		input: {
			text,
		},
		voice: {
			languageCode: 'pt-BR',
			name: 'pt-BR-Standard-A',
		},
		audioConfig: {
			// OGG
			audioEncoding: 3,
		},
	};
	const [response] = await client.synthesizeSpeech(request);

	if (response.audioContent?.buffer) {
		const buffer = Buffer.from(response.audioContent);
		return buffer;
	}

	throw new Error("Can't convert text to audio");
}

export { fromTextToSpeech };
