"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(' '), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, "5458774ba4b590af04af2d8abc01f9c1").sub;
        request.user_id = sub;
        return next();
    }
    catch (error) {
        return response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
