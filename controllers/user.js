const User = require("../models/user")

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function getUserById(req,res){
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ error: 'user not found' })
    return res.json(user);
}

async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
    return res.json({ status: "Success" });
}


async function handleDeleteUserById(req, res){
    // Delete user with id
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    const result = await User.create({
        first_name: body?.first_name,
        last_name: body?.last_name,
        email: body?.email,
        job_title: body?.job_title,
        gender: body?.gender,
    })

    console.log(result, 'result')
    return res.status(201).json({ msg: 'Success 😎' ,id: result._id })
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}