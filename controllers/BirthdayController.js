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

export const updateBirthday = async (req, res) => {
  const { id } = req.params;                      // 1. Get the birthday ID from URL params
  const { name, dateOfBirth } = req.body;         // 2. Destructure fields to update from request body

  try {
    const updatedBirthday = await Birthday.findByIdAndUpdate(
      id,
      { name, dateOfBirth },                      // 3. Update fields
      { new: true }                               // 4. Return the updated document
    );

    if (!updatedBirthday) {
      return res.status(404).json({ message: '❌ Birthday not found' });  // 5. If not found
    }

    res.status(200).json({
      message: '✅ Birthday updated successfully',
      birthday: updatedBirthday
    });
  } catch (error) {
    console.error('Error updating birthday:', error);  // 6. Error handling
    res.status(500).json({
      message: "❌ Error updating birthday",
      error
    });
  }
};


export const deleteBirthday = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Birthday ID is required' });
  }

  try {
    const deletedBirthday = await Birthday.findByIdAndDelete(id);
    // 7. Check if the birthday was found and deleted
    if (!deletedBirthday) {
      return res.status(404).json({ message: '❌ Birthday not found' });
    }
    res.status(200).json({ message: '✅ Birthday deleted successfully' });
  } catch (error) {
    console.error('Error deleting birthday:', error);
    res.status(500).json({ message: "❌ Error deleting birthday", error });
  }
};



