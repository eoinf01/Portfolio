const db = require("../configs/db.config")


const schema = db.mongoose.Schema({
    title: String,
    description: String,
    technologies: Array,
    date: {type: Date}
}
)

module.exports = db.mongoose.model("sales",schema);