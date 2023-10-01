const PasswordHash = require('../PasswordHash');

describe('PasswordHash interface', () => {
  it('should throw error when invoke asbtract behavior', async () => {
    const passwordHash = new PasswordHash();

    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
