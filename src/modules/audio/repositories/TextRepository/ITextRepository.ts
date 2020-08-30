export type ITextRepositoryRequest = {
  audio: {
    content: Buffer;
  };
  config: {
    encoding: number;
    languageCode: string;
    sampleRateHertz: number;
  };
};

export type ITextRepositoryResponse = string;

export type ITextRepository = (
  options: ITextRepositoryRequest,
) => Promise<ITextRepositoryResponse>;
