module.exports.start = (client) => {

    const express = require('express');
    const app = express();
    const cookieParser = require('cookie-parser');
    const encryptor = require('simple-encryptor')('asdasklvmopqhqdviöojqisdmladm?_**12156454');

    app.set('view engine', 'ejs');
    app.set('views', `${__dirname}/public`);
    app.use(express.static(`${__dirname}/public`));
    app.use(cookieParser())

    app.get('/', (req, res) => {
        return res.render('index');
    })

    app.get('/login', (req, res) => {
        res.redirect('https://discord.com/api/oauth2/authorize?client_id=788706993551704085&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify')
     })

    app.get('/callback', async (req, res) => {

        if (!req.query || !req.query.code || req.query.code === undefined || req.query.code === null) return res.render('errorPages/404');

        const DiscordOauth2 = require("discord-oauth2");
        const oauth = new DiscordOauth2();

        const data = await oauth.tokenRequest({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            code: req.query.code,
            scope: "identify",
            grantType: "authorization_code",
            redirectUri: process.env.REDIRECT_URL,
        }).catch(err => {
            console.log(err);
            res.render('errorPages/404')
        })

        const user = await oauth.getUser(data.access_token).catch(err => { res.render('errorPages/404') });

        res.cookie('_id', encryptor.encrypt(user.id));
        res.redirect('/verify');
    })

    app.get('/verify', async (req, res) => {
        if (!req.cookies || req.cookies._id === undefined || req.cookies._id === null) {
            res.cookie('code', req.query.code)
            return res.redirect('/login');
        }

        const id = await encryptor.decrypt(req.cookies._id);
        const code = req.cookies.code;
    
        const db = require('quick.db');
        const verification = await db.get(id);

        if (!verification || verification === undefined || verification === null || !code || code === undefined || code === null || code !== verification) {
            res.clearCookie('_id');
            res.clearCookie('code');
            return res.render('errorPages/invalidCode');
        }

        res.clearCookie('_id');
        res.clearCookie('code')
        db.delete(id);
        res.render('verified');

        const verifyCommand = client.commands.get('verify');
        verifyCommand.success();

    })

    app.get('*', (req, res) => {
        res.render('errorPages/404');
    })

    app.listen(process.env.PORT, () => { console.log(`Dashboard started at port ${process.env.PORT}.`.blue) });

}

