const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  itemsCount: { type: Number, default: 0 },
  labels: { type: Array, default: [] },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
  timestamps: true
});

module.exports = mongoose.model('List', listSchema);
