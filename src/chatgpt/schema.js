const mongoose=require('mongoose');
const UserDetailsSchema=new mongoose.Schema(
    {
        title:String,
        artist:String,
        album:String,
        url:String,
    },
    {
        collection:"songs",
    }
)
mongoose.model("songs",UserDetailsSchema);