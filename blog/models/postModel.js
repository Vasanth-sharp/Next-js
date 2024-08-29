import mongoose from "mongoose";

const schema = mongoose.Schema;

const postSchema = new schema(
  {
    title: String,
    description: String,
    image: String,
    created_at: String,
  },
  { toJSON: { virtuals: true } }
);
postSchema.virtual("short_description").get(function () {
  return this.description.substr(0, 100) + "...";
});
postSchema.virtual("created_at_formatted").get(function () {
  return changeDateFormat(this.created_at);
});

function changeDateFormat(date_str) {
  const date = new Date(date_str);
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`;
}
//For every time compiling by next ,, while creating a new model with same name(it already exist in memory)
//monggoose show error so that we check if the model[table] is already exist ,if it exist it take a old one ,,don't create new....
const postModel = mongoose.models.post || mongoose.model("post", postSchema);
export default postModel;
