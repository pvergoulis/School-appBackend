const UserDAO = require('../dao/user.dao');

class UserRepository {
    async getAllUsers() {
        return await UserDAO.findAll();
    }

    async getUserByUsername(username) {
        return await UserDAO.findByUsername(username);
    }

    async createUser(userData) {
        return await UserDAO.create(userData);
    }

    async updateUser(username, updateData) {
        return await UserDAO.update(username, updateData);
    }

    async deleteUser(username) {
        return await UserDAO.delete(username);
    }
}

module.exports = new UserRepository();
