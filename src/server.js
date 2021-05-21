"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.configuration();
        this.routes();
    }
    Server.prototype.configuration = function () {
        this.app.set("port", process.env.PORT || 3000);
    };
    Server.prototype.routes = function () {
        this.app.get("/", function (req, res) {
            res.send("Hello world");
        });
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("Server is listening on " + _this.app.get("port") + " port.");
        });
    };
    return Server;
}());
var server = new Server();
server.start();
