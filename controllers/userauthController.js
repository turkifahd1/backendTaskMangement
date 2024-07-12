const userauthService = require('../services/userauthService');
const BadRequestErrors = require('../errors/badRequests')
const getAllUsers = async (req, res) => {
  try {
    const users = await userauthService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//apdateById
const updateUser = async(req, res, next)=> {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedPost = await userauthService.updateUser(id, updateData);
    res.status(200).json(updatedPost);
  } catch (error) {
    next(new BadRequestErrors(error.message, ErrorCode.GENERIC_ERROR));
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userauthService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers, updateUser, deleteUser };
