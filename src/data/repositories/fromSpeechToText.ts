import { SpeechClient } from '@google-cloud/speech';
import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { ApplicationConfig } from '../../config';

async function fromSpeechToText(buffer: Buffer) {
	const client = new SpeechClient({
		projectId: ApplicationConfig.gcp.projectId,
		keyFilename: ApplicationConfig.gcp.credentialsPath,
	});
	const fullPath = `${path.resolve(
		__dirname,
		'..',
		'..',
		'..',
		'tmp'
	)}/commercial_stereo.wav`;
	// const writeFile = fs.writeFileSync(fullPath, buffer);
	const file = fs.readFileSync(fullPath);
	const audioBytes = file.toString('base64');
	const request = {
		audio: {
			content: file,
		},
		config: {
			// OGG
			encoding: 1,
			languageCode: `en-US`,
			audioChannelCount: 2,
		},
	};
	const [response] = await client.recognize(request);

	console.log(response);

	return response.results
		?.map(result => {
			if (result?.alternatives) {
				return result?.alternatives[0]?.transcript;
			}
		})
		.join('\n');
}

export { fromSpeechToText };
