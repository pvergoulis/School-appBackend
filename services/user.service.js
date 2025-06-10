const UserRepository = require('../repository/user.repository');

class UserService {
    async findAllUsers() {
        return await UserRepository.getAllUsers();
    }

    async findUser(username) {
        return await UserRepository.getUserByUsername(username);
    }

    async createUser(userData) {
        return await UserRepository.createUser(userData);
    }

    async updateUser(username, updateData) {
        return await UserRepository.updateUser(username, updateData);
    }

    async deleteUser(username) {
        return await UserRepository.deleteUser(username);
    }
}

module.exports = new UserService();
