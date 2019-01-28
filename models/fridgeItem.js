const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fridgeItemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Array, required: true },
    description: String,
    accountId: {type: String, required: true}
});

const FridgeItem = mongoose.model("FridgeItem", fridgeItemSchema);

module.exports = FridgeItem;