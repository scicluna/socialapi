const connection = require('../config/connection')
const {User, Thought} = require('../models')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [
        {userName: 'Bob', email: 'bob@bob.com'},
        {userName: 'Bill', email: 'bill@bill.com'},
        {userName: 'James', email: 'james@james.com'},
        {userName: 'Mary', email: 'mary@mary.com'},
        {userName: 'Jill', email: 'jill@jill.com'},
        {userName: 'Joe', email: 'joe@joe.com'},
        {userName: 'Nick', email: 'nick@nick.com'},
        {userName: 'Beatriz', email: 'beatriz@beatriz.com'},
        {userName: 'Tommy', email: 'tommy@tommy.com'},
        {userName: 'Nathan', email: 'nathan@nathan.com'},
        {userName: 'Ben', email: 'ben@ben.com'},
        {userName: 'Nikky', email: 'nikky@nikky.com'},
        {userName: 'KD', email: 'kd@kd.com'},
        {userName: 'Damian', email: 'damian@damian.com'},
        {userName: 'Brad', email: 'brad@brad.com'},
        {userName: 'Grady', email: 'grady@grady.com'},
        {userName: 'Raman', email: 'raman@raman.com'},
        {userName: 'Ryan', email: 'ryan@ryan.com'}
    ];

})