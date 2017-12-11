import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    shopId: Number,
    shop_URI: String,
    email: String,
    accessToken: String,
    refreshToken: String,
    params: Object
});

const User = mongoose.model('user', userSchema);

export default User;