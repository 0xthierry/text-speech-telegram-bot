export type DownloadAudio = (link: string) => Promise<Buffer>;
export type FromSpeechToText = (buffer: Buffer) => Promise<string | undefined>;
export type FromTextToSpeech = (text: string) => Promise<Buffer>;
