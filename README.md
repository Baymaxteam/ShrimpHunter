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
	- 3.4 unit test
- 4.final test and customer feedback

## 10/20 work
- momo & N : 2.1/2.5
- bei: 2.4 
- kuo & Rita : 2.2/2.3


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

cd mjpg-streamer-experimental
make
sudo make install

`

### Start Http Server
`
mjpg_streamer -i "input_uvc.so -d /dev/video0 -f 15 -r 640x480" -o "output_http.so -p 8080 -w /usr/local/share/mjpg-streamer/www/"
`



## nodejs 4.2.6
`
sudo apt-get install npm nodejs nodejs-legacy 
`

