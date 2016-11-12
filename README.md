# ShripHunter

## mean io stack developing stage

- 1.mean io environmrnt -> single page application SPA
- 2.part development
	- 2.1 pi - uart ttl - RS485 - inverter -> modbus/RTU protocol contorl inverter
	https://www.npmjs.com/package/modbusrtu
	- 2.2 pi - usb - camera -> streaming server
	- 2.3 pi - ethernet - public ip - view -> build server
	- 2.4 pi - website - user story -> design flow chart and web frame
	- 2.5 android phone - app - public ip - visit website -> app
- 3.integrate and enhanced development
	- 3.1 RESTful API 
	- 3.2 SPA design view
	- 3.3 streaming server build-in website
	- 3.4 integrate test
- 4.final test and customer feedback

## 10/20 work
- momo & N : 2.1/2.5
- bei: 2.4 
- kuo & Rita : 2.2/2.3

## 10/27 work
- momo & bei : 2.1 (SW/HW)
- kuo & Rita : 3.3
- momo & kuo : 3.4


## resource link

MEAN: AngularJS + NodeJS的REST API开发教程
https://i.cmgine.net/archives/9688.html


第一部分 - MEAN全栈开发：AngularJS实战教程
http://ju.outofmemory.cn/entry/200208

第二部分 - MEAN全栈开发：使用NodeJS和MongoDB创建REST服务 
http://ju.outofmemory.cn/entry/200207

第三部分 - MEAN全栈开发：前后端整合
http://ju.outofmemory.cn/entry/200206


## mjpg-stream
#### ref: https://github.com/jacksonliam/mjpg-streamer

`
git clone https://github.com/jacksonliam/mjpg-streamer
`

### Building & Installation
`
sudo apt-get install cmake libjpeg8-dev
`

`
cd mjpg-streamer-experimental
make
sudo make install
`

### Start Http Server
`
mjpg_streamer -i "input_uvc.so -d /dev/video0 -f 15 -r 640x480" -o "output_http.so -p 8080 -w /usr/local/share/mjpg-streamer/www/"
`

`
http://192.168.0.103:8080/?action=stream
`


## nodejs 4.2.6
`
sudo apt-get install npm nodejs nodejs-legacy 
`

## dd
`
sudo dd bs=1M if=/home/qwedsazxc78/Desktop/pi.img of=/dev/sda5
`

`
sudo dd if=/dev/sda5 of=/home/qwedsazxc78/Desktop/pi.img bs=1M
`


## MongoDB Schema
### Ref:http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/

Connect to MongoDB and create/use database called ShrimpData

`
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ShrimpData');
`


Create a schema

`
var ShrimpSchema = new mongoose.Schema({
  ID: Number,
  NAME: String,
  Motor1: { type: Number, min: -6000, max: 60000 },
  Motor2: { type: Number, min: -6000, max: 60000 },
  Motor3: { type: Number, min: -6000, max: 60000 },
});
`


Create a model based on the schema

`var Shrimp = mongoose.model('Shrimp', ShrimpSchema);`



## Restful API

| Resource (URI) | POST (create)      | GET (read)       | PUT (update)       | DELETE (destroy)    |
|----------------|--------------------|------------------|--------------------|---------------------|
| /shrimps/      | create new setting | list setting     | error              | delete all          |
| /shrimps/:ID   | error              | show setting :ID | update setting :ID | destroy setting :ID |



curl -H "Content-Type: application/json" -d '{"ID":1,"NAME":"泰國蝦", "Motor1":123,  "Motor2":321,  "Motor3":555}' http://192.168.0.115:3000/shrimps

