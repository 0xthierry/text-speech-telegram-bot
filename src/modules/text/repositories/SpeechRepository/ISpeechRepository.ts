export type ISpeechRepositoryRequest = {
  input: {
    text: string;
  };
  voice: {
    languageCode: string;
    name: string;
  };
  audioConfig: {
    audioEncoding: number;
  };
};

export type ISpeechRepositoryResponse = string | Uint8Array | null | undefined;

export type ISpeechRepository = (
  options: ISpeechRepositoryRequest,
) => Promise<ISpeechRepositoryResponse>;
