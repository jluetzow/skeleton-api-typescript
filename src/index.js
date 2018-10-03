"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const blockstart_nem1_sdk_1 = require("blockstart-nem1-sdk");
const express_1 = require("express");
const routes_1 = require("./api/routes");
const network_services_1 = require("./services/network-services");
const sockets_1 = require("./sockets");
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    serveClient: false,
    wsEngine: 'ws' // uws is not supported since it is a native module
});
network_services_1.initNEMLibrary(blockstart_nem1_sdk_1.NetworkTypes.MAIN_NET);
io.on('connection', (client) => {
    console.log('new socket connection');
    sockets_1.socketInit(client);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes_1.routes(express_1.Router()));
server.listen(3000, () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), 3000, app.get('env'));
    console.log('   Press CTRL-C to stop\n');
});
exports.ioSocket = () => {
    return io;
};
//# sourceMappingURL=index.js.map