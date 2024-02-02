import { SourceFile } from './sourceFile';

describe('SourceFile', () => {
  it('should create an instance', () => {
    expect(new SourceFile(1, 'Test', 'console.log()', 1)).toBeTruthy();
  });
});
