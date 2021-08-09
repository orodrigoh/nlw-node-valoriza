"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var User_1 = require("./User");
var Photo = /** @class */ (function () {
    function Photo() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Photo.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "user_photo_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: 'user_photo_id' }),
        typeorm_1.OneToOne(function () { return User_1.User; }, function (user) { return user.photos; }),
        __metadata("design:type", User_1.User)
    ], Photo.prototype, "userPhotoId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "url_photo", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Photo.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Exclude(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Photo.prototype, "updated_at", void 0);
    Photo = __decorate([
        typeorm_1.Entity('photos'),
        __metadata("design:paramtypes", [])
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
