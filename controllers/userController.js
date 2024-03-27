const User = require('../models/user');

const zod = require('zod');

exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createUser = async (req, res) => {
    // use zod
    const schema = zod.object({
        name: zod.string(
            {
                required_error: 'Name is required'
            }
        ).min(3, {
            message: 'Name must be at least 3 characters long!!!!!'
        
        }).max(255),
        email: zod.string().min(5).max(255),
        password: zod.string().min(5).max(1024)
    });

    try {
        schema.parse(req.body);
    }
    catch (error) {
        // customize error to be very specific
        res.status(400).json({ message: error.errors[0].message });
        return;

        
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(removedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}