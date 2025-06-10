const User = require('../models/user.model');

class UserDAO {
    async findAll() {
        return await User.find();
    }

    async findByUsername(username) {
        return await User.findOne({ username });
    }

    async create(userData) {
        const newUser = new User(userData);
        return await newUser.save();
    }

    async update(username, updateData) {
        return await User.findOneAndUpdate({ username }, updateData, { new: true });
    }

    async delete(username) {
        return await User.findOneAndDelete({ username });
    }
}

module.exports = new UserDAO();
