const UserRepository = require('../UserRepository');

describe('UserRepository interface', () => {
  it('should throw error when invoke sbastract behavior', async () => {
    const userRepository = new UserRepository();

    await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
