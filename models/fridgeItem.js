const mongoose = require('mongoose');

const { Schema } = mongoose;

const fridgeItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String },
  date: { type: Number, required: true },
  accountId: { type: String, required: true },
});

const FridgeItem = mongoose.model('FridgeItem', fridgeItemSchema);

module.exports = FridgeItem;
