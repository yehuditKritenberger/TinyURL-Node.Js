import LinkModel from "../Models/LinkModel.js";
import UserModel from "../Models/UserModel.js";

const UserController = {
  getList: async (req, res) => {
    try {
      const Users = await UserModel.find();
      res.json(Users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      await UserModel.find({ _id: req.params.id })
      const User = await UserModel.findById(req.params.id);
      res.json(User);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name, email, password, links } = req.body;
    try {
      const linkObjects = await LinkModel.insertMany(links);
      const linkIds = linkObjects.map(link => link.id);
      const newUser = await UserModel.create({ name, email, password, links: linkIds });

      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, links } = req.body;
    try {
      const linkObjects = await LinkModel.insertMany(links);
      const linkIds = linkObjects.map(link => link._id);
      const updatedUser = await UserModel.findByIdAndUpdate(id, { name, email, password, links: linkIds }, { new: true }).populate('links')
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await UserModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getClicksByTarget: async (req, res) => {
    const { id } = req.params;
    try {
      const link = await LinkModel.findById(id);
      if (!link) {
        return res.status(404).json({ message: 'Link not found' });
      }
      const clicksBySource = link.clicks.reduce((acc, click) => {
        if (!acc[click.targetParamValue]) {
          acc[click.targetParamValue] = 0;
        }
        acc[click.targetParamValue]++;
        return acc;
      }, {});
      res.json(clicksBySource);
    } catch (e) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default UserController;