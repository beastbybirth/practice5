const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Light = require('./models/light')
const Ac = require('./models/ac')
const Security = require('./models/security')
const app = express();

mongoose.connect("mongodb+srv://litesh:litesh@cluster0.ptakpyh.mongodb.net/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 4000;

app.get('/', (req, res) => {
    res.send('The api is working!');
});

app.use(express.static(`${__dirname}/public/generated-docs`));

app.get('/docs', (req, res) => {
  res.sendFile(`${__dirname}/public/generated-docs/index.html`);
});

/**
* @api {get} /light GET light
* @apiGroup light
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645ab0710002760f2c92aaa0",
*  "deviceName": "light1",
*  "state": "On",
*  "color": "#db0000",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.get('/light', (req, res) => {
    Light.find({})
    .then((light) => {
        res.send(light);
    })
    .catch((err) => {
            res.send(err);
    })
})


/**
* @api {get} /ac GET ac
* @apiGroup ac
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645aaa78705ca2862506c88f",
*  "deviceName": "ac1",
*  "temperature": 69,
*  "fanSpeed": "medium",
*  "mode": "heat",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.get('/ac', (req, res) => {
    Ac.find({})
    .then((ac) => {
        res.send(ac);
    })
    .catch((err) => {
            res.send(err);
    })
})


/**
* @api {get} /security GET security
* @apiGroup security
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645ab5d50002760f2c92ab01",
*  "deviceName": "sec2",
*  "lockState": "Locked",
*  "alarmState": "On",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.get('/security', (req, res) => {
    Security.find({})
    .then((security) => {
        res.send(security);
    })
    .catch((err) => {
            res.send(err);
    })
})


/**
* @api {post} /light POST light
* @apiGroup light
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645ab0710002760f2c92aaa0",
*  "deviceName": "light1",
*  "state": "On",
*  "color": "#db0000",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.post('/light', (req, res) => {
    const { deviceName, state, color } = req.body;
    const body = new Light({
        deviceName,
        state,
        color
    })
    try {
        body.save();
    }
    catch (err) {
        res.send(err);
    }
})

/**
* @api {post} /ac POST ac
* @apiGroup ac
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645aaa78705ca2862506c88f",
*  "deviceName": "ac1",
*  "temperature": 69,
*  "fanSpeed": "medium",
*  "mode": "heat",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.post('/ac', (req, res) => {
    const { deviceName, temperature, fanSpeed, mode } = req.body;
    const body = new Ac({
        deviceName,
        temperature,
        fanSpeed,
        mode
    })
    try {
        body.save();
    }
    catch (err) {
        res.send(err);
    }
})


/**
* @api {post} /security POST security
* @apiGroup security
* @apiSuccessExample {json} Success-Response:
*  [
*{
*  "_id": "645ab5d50002760f2c92ab01",
*  "deviceName": "sec2",
*  "lockState": "Locked",
*  "alarmState": "On",
*  "__v": 0
*}
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
app.post('/security', (req, res) => {
    const { deviceName, lockState, alarmState } = req.body;
    const body = new Security({
        deviceName,
        lockState,
        alarmState
    })
    try {
        body.save();
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(port, () => {
    console.log('App listening on port 4000!');
});