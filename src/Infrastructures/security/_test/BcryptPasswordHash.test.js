const bcrypt = require('bcrypt');
const BcryptPasswordHash = require('../BcryptPasswordHash');

describe('BcryptPasswordHash', () => {
  describe('hash function', () => {
    it('should encrypt password correctly', async () => {
      const spyHash = jest.spyOn(bcrypt, 'hash');
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);

      const encryptedpassword = await bcryptPasswordHash.hash('plain_password');

      expect(typeof encryptedpassword).toEqual('string');
      expect(encryptedpassword).not.toEqual('plain_password');
      expect(spyHash).toBeCalledWith('plain_password', 10); // 10 adalah nilai saltRound default untuk BcryptPasswordHash
    });
  });
});
