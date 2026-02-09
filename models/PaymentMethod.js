import mongoose from 'mongoose';

const paymentMethodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Payment method type
  type: {
    type: String,
    enum: ['credit_card', 'debit_card', 'mobile_money'],
    required: true
  },
  
  // Card details (encrypted in production)
  cardNumber: {
    type: String,
    trim: true
  },
  cardHolder: {
    type: String,
    trim: true
  },
  expiryMonth: Number,
  expiryYear: Number,
  cvv: String, // Should be encrypted
  
  // Mobile money details
  mobileNumber: String,
  provider: {
    type: String,
    enum: ['MTN', 'Vodafone', 'AirtelTigo']
  },
  
  // Status
  label: {
    type: String,
    default: 'Card'
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  
  // Verification
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
paymentMethodSchema.index({ userId: 1 });
paymentMethodSchema.index({ userId: 1, isDefault: 1 });

// Security: Don't return sensitive data
paymentMethodSchema.methods.toJSON = function() {
  const method = this.toObject();
  // Mask card number
  if (method.cardNumber) {
    method.cardNumber = '**** **** **** ' + method.cardNumber.slice(-4);
  }
  // Never return CVV
  delete method.cvv;
  return method;
};

export default mongoose.model('PaymentMethod', paymentMethodSchema);
