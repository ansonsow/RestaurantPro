const mongoose = require("mongoose")

mongoose.set("strictQuery", true);

// const dbURL = 'mongodb+srv://group_3:5NTH2XswpIvMKA5Oa@cluster0.49zw62h.mongodb.net/?retryWrites=true&w=majority';
// 5NTH2XswpIvMKA5O

const dbURL = 'mongodb+srv://group_3:5NTH2XswpIvMKA5O@restaurantpro.kzv4u9s.mongodb.net/?retryWrites=true&w=majority'

// mongodb+srv://group_3:<password>@restaurantpro.kzv4u9s.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(dbURL, { useNewUrlParser: true})

// console.log("wtf");
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connection to ${dbURL}`);
})

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});


mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

    