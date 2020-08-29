import convertToABuffer from './convertToBuffer';

describe('convertToABuffer', () => {
  it('should return a buffer if the audio is String encoded', () => {
    const buffer = convertToABuffer('string');
    expect(buffer instanceof Buffer).toBe(true);
  });
  it('should return a buffer if the audio is Uint8Array encoded', () => {
    const buffer = convertToABuffer(Uint8Array.from([1, 3, 4, 5]));
    expect(buffer instanceof Buffer).toBe(true);
  });
  it('should throw an error if the audio is different from String or Uint8Array', () => {
    expect(() => convertToABuffer(null)).toThrow();
  });
});
