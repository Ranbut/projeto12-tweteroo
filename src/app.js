import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const usuarios = [];
const tweetes = [];

const PORT = 5000;

server.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("OK");

});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    if(usuarios.find(u => u.username === tweet.username)){
        tweetes.push(tweet);
        res.send("OK");
    }else{
        res.send("UNAUTHORIZED");
    }
});

server.get('/tweets', (req, res) => {
    let ultimosTweets = [];
    if(tweetes.length <= 10){
        ultimosTweets = tweetes;
    }else{
        ultimosTweets = tweetes.slice(tweetes.length-10, tweetes.length);
    }
    const tweetsAvatar = ultimosTweets.map(t => {
        const usuario = usuarios.find(u => u.username === t.username);
        return {username: t.username, avatar: usuario.avatar, tweet: t.tweet};
    });
    res.send(tweetsAvatar);
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
  console.log(`Use: http://localhost:${PORT}`);
});
