import Birthday from "../models/Birthday.js";

export const addBirthday = async (req, res) => {
  const { name, dateOfBirth, userId } = req.body;

  try {
    const newBirthday = new Birthday({ name, dateOfBirth, userId });
    await newBirthday.save();
    res.status(201).json({ message: '✅ Birthday successfully added!', birthday: newBirthday });
  } catch (error) {
    console.error('Error adding birthday:', error);
    res.status(500).json({ message: "❌ Error adding birthday", error });
  }
};

export const getAllBirthdays = async (req, res) => {
  try {
    const birthdays = await Birthday.find(); // ✅ Corrected here
    res.status(200).json(birthdays);
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    res.status(500).json({ message: "❌ Error fetching birthdays", error });
  }
};
