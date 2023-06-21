import isPangram from "./pangram";

describe('Test isPangram function', () => {
    it('Should return true to a pangram word', () => {
        const word = "The quick brown fox jumps over a lazy dog";
        expect(isPangram(word)).toBe(true);
    });

    it('Should return false to a pangram word', () => {
        const word = "The quick brown fox jumps over a lazy cat";
        expect(isPangram(word)).toBe(false);
    });
});