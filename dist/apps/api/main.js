/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/local-auth.guard.ts");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    login(req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.authService.login(req.user);
        });
    }
    getProfile(req) {
        return req.user;
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('auth/login'),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "login", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const movie_module_1 = __webpack_require__("./apps/api/src/app/movie/movie.module.ts");
const user_module_1 = __webpack_require__("./apps/api/src/app/user/user.module.ts");
const category_module_1 = __webpack_require__("./apps/api/src/app/category/category.module.ts");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
const path_1 = __webpack_require__("path");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            movie_module_1.MovieModule,
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://rsstudent:FJLjwzI0gaKzGEok@cluster0.w9p60.mongodb.net/movies?retryWrites=true&w=majority`),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'nx-app'),
                exclude: ['/api*'],
            }),
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const user_module_1 = __webpack_require__("./apps/api/src/app/user/user.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const constants_1 = __webpack_require__("./apps/api/src/app/auth/constants.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./apps/api/src/app/user/user.service.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userService.findOne(username);
            if (user && user.password === pass) {
                const { password } = user, result = (0, tslib_1.__rest)(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    login(user) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const payload = { username: user.username, sub: user.userId };
            return {
                access_token: this.jwtService.sign(payload),
            };
        });
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/auth/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'AwesomeSecretKey',
};


/***/ }),

/***/ "./apps/api/src/app/auth/jwt-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const constants_1 = __webpack_require__("./apps/api/src/app/auth/constants.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    validate(payload) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return { userId: payload.sub, username: payload.username };
        });
    }
};
JwtStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/auth/local-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_local_1 = __webpack_require__("passport-local");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(username, password) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(username, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
LocalStrategy = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/api/src/app/category/category.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_category_dto_1 = __webpack_require__("./apps/api/src/app/category/dto/create-category.dto.ts");
const update_category_dto_1 = __webpack_require__("./apps/api/src/app/category/dto/update-category.dto.ts");
const category_service_1 = __webpack_require__("./apps/api/src/app/category/category.service.ts");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getAll() {
        return this.categoryService.getAll();
    }
    findOne(id) {
        return this.categoryService.getById(id);
    }
    create(createCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }
    remove(id) {
        return this.categoryService.remove(id);
    }
    update(updateCategoryDto, id) {
        return this.categoryService.update(id, updateCategoryDto);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CategoryController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CategoryController.prototype, "findOne", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof create_category_dto_1.CreateCategoryDto !== "undefined" && create_category_dto_1.CreateCategoryDto) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CategoryController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CategoryController.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, common_1.Put)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof update_category_dto_1.UpdateCategoryDto !== "undefined" && update_category_dto_1.UpdateCategoryDto) === "function" ? _f : Object, String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CategoryController.prototype, "update", null);
CategoryController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('category'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _h : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),

/***/ "./apps/api/src/app/category/category.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const category_controller_1 = __webpack_require__("./apps/api/src/app/category/category.controller.ts");
const category_service_1 = __webpack_require__("./apps/api/src/app/category/category.service.ts");
const category_schema_1 = __webpack_require__("./apps/api/src/app/category/schemas/category.schema.ts");
let CategoryModule = class CategoryModule {
};
CategoryModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: category_schema_1.Category.name, schema: category_schema_1.CategorySchema },
            ]),
        ],
        providers: [category_service_1.CategoryService],
        controllers: [category_controller_1.CategoryController],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),

/***/ "./apps/api/src/app/category/category.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const category_schema_1 = __webpack_require__("./apps/api/src/app/category/schemas/category.schema.ts");
const mongoose_2 = __webpack_require__("mongoose");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
        this.category = [];
    }
    getAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.categoryModel.find().exec();
        });
    }
    getById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.categoryModel.findById(id);
        });
    }
    create(categoryDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newCategory = new this.categoryModel(categoryDto);
            return newCategory.save();
        });
    }
    remove(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.categoryModel.findByIdAndRemove(id);
        });
    }
    update(id, categoryDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.categoryModel.findByIdAndUpdate(id, categoryDto, { new: true });
        });
    }
};
CategoryService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./apps/api/src/app/category/dto/create-category.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategoryDto = void 0;
class CreateCategoryDto {
}
exports.CreateCategoryDto = CreateCategoryDto;


/***/ }),

/***/ "./apps/api/src/app/category/dto/update-category.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategoryDto = void 0;
class UpdateCategoryDto {
}
exports.UpdateCategoryDto = UpdateCategoryDto;


/***/ }),

/***/ "./apps/api/src/app/category/schemas/category.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategorySchema = exports.Category = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Category = class Category {
};
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Category.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Category.prototype, "slug", void 0);
Category = (0, tslib_1.__decorate)([
    (0, mongoose_1.Schema)()
], Category);
exports.Category = Category;
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);


/***/ }),

/***/ "./apps/api/src/app/movie/dto/create-movie.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMovieDto = void 0;
class CreateMovieDto {
}
exports.CreateMovieDto = CreateMovieDto;


/***/ }),

/***/ "./apps/api/src/app/movie/dto/update-movie.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMovieDto = void 0;
class UpdateMovieDto {
}
exports.UpdateMovieDto = UpdateMovieDto;


/***/ }),

/***/ "./apps/api/src/app/movie/movie.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_movie_dto_1 = __webpack_require__("./apps/api/src/app/movie/dto/create-movie.dto.ts");
const update_movie_dto_1 = __webpack_require__("./apps/api/src/app/movie/dto/update-movie.dto.ts");
const movie_service_1 = __webpack_require__("./apps/api/src/app/movie/movie.service.ts");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    getAll() {
        return this.movieService.getAll();
    }
    findOne(id) {
        return this.movieService.getById(id);
    }
    create(createMovieDto) {
        return this.movieService.create(createMovieDto);
    }
    remove(id) {
        return this.movieService.remove(id);
    }
    update(updateMovieDto, id) {
        return this.movieService.update(id, updateMovieDto);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], MovieController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MovieController.prototype, "findOne", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof create_movie_dto_1.CreateMovieDto !== "undefined" && create_movie_dto_1.CreateMovieDto) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MovieController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MovieController.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, common_1.Put)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof update_movie_dto_1.UpdateMovieDto !== "undefined" && update_movie_dto_1.UpdateMovieDto) === "function" ? _f : Object, String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MovieController.prototype, "update", null);
MovieController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('movie'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof movie_service_1.MovieService !== "undefined" && movie_service_1.MovieService) === "function" ? _h : Object])
], MovieController);
exports.MovieController = MovieController;


/***/ }),

/***/ "./apps/api/src/app/movie/movie.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const movie_controller_1 = __webpack_require__("./apps/api/src/app/movie/movie.controller.ts");
const movie_service_1 = __webpack_require__("./apps/api/src/app/movie/movie.service.ts");
const movie_schema_1 = __webpack_require__("./apps/api/src/app/movie/schemas/movie.schema.ts");
let MovieModule = class MovieModule {
};
MovieModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: movie_schema_1.Movie.name, schema: movie_schema_1.MovieSchema }]),
        ],
        providers: [movie_service_1.MovieService],
        controllers: [movie_controller_1.MovieController],
    })
], MovieModule);
exports.MovieModule = MovieModule;


/***/ }),

/***/ "./apps/api/src/app/movie/movie.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const movie_schema_1 = __webpack_require__("./apps/api/src/app/movie/schemas/movie.schema.ts");
const mongoose_2 = __webpack_require__("mongoose");
let MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
        this.movie = [];
    }
    getAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.movieModel.find().exec();
        });
    }
    getById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.movieModel.findById(id);
        });
    }
    create(movieDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newMovie = new this.movieModel(movieDto);
            return newMovie.save();
        });
    }
    remove(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.movieModel.findByIdAndRemove(id);
        });
    }
    update(id, movieDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.movieModel.findByIdAndUpdate(id, movieDto, { new: true });
        });
    }
};
MovieService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, mongoose_1.InjectModel)(movie_schema_1.Movie.name)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MovieService);
exports.MovieService = MovieService;


/***/ }),

/***/ "./apps/api/src/app/movie/schemas/movie.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieSchema = exports.Movie = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose = __webpack_require__("mongoose");
let Movie = class Movie {
};
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "nameRu", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "nameEn", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "kinopoiskId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "imdbId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "nameOriginal", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "posterUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "posterUrlPreview", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "reviewsCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingGoodReview", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingGoodReviewVoteCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingKinopoisk", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingKinopoiskVoteCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingImdb", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingImdbVoteCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingFilmCritics", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingFilmCriticsVoteCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingAwait", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingAwaitCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingRfCritics", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "ratingRfCriticsVoteCount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "webUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "filmLength", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "slogan", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "shortDescription", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "editorAnnotation", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "isTicketsAvailable", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], Movie.prototype, "productionStatus", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], Movie.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "ratingMpaa", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "ratingAgeLimits", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "hasImax", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "has3D", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Movie.prototype, "lastSync", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], Movie.prototype, "countries", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], Movie.prototype, "genres", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "startYear", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Movie.prototype, "endYear", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "serial", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "shortFilm", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Movie.prototype, "completed", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] }),
    (0, tslib_1.__metadata)("design:type", Array)
], Movie.prototype, "category", void 0);
Movie = (0, tslib_1.__decorate)([
    (0, mongoose_1.Schema)()
], Movie);
exports.Movie = Movie;
exports.MovieSchema = mongoose_1.SchemaFactory.createForClass(Movie);


/***/ }),

/***/ "./apps/api/src/app/user/dto/create-user.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./apps/api/src/app/user/dto/update-user.dto.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./apps/api/src/app/user/schemas/user.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let User = class User {
};
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "isAdmin", void 0);
User = (0, tslib_1.__decorate)([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/api/src/app/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_user_dto_1 = __webpack_require__("./apps/api/src/app/user/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__("./apps/api/src/app/user/dto/update-user.dto.ts");
const user_service_1 = __webpack_require__("./apps/api/src/app/user/user.service.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.getAll();
    }
    findOne(id) {
        return this.userService.getById(id);
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    remove(id) {
        return this.userService.remove(id);
    }
    update(updateUserDto, id) {
        return this.userService.update(id, updateUserDto);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UserController.prototype, "getAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "findOne", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, common_1.Put)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__param)(1, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _f : Object, String]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "update", null);
UserController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('user'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_h = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _h : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/api/src/app/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_controller_1 = __webpack_require__("./apps/api/src/app/user/user.controller.ts");
const user_service_1 = __webpack_require__("./apps/api/src/app/user/user.service.ts");
const user_schema_1 = __webpack_require__("./apps/api/src/app/user/schemas/user.schema.ts");
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/api/src/app/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_schema_1 = __webpack_require__("./apps/api/src/app/user/schemas/user.schema.ts");
const mongoose_2 = __webpack_require__("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'maria',
                password: 'guess',
            },
        ];
    }
    findOne(username) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.users.find((user) => user.username === username);
        });
    }
    getAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userModel.find().exec();
        });
    }
    getById(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userModel.findById(id);
        });
    }
    create(userDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newUser = new this.userModel(userDto);
            return newUser.save();
        });
    }
    remove(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userModel.findByIdAndRemove(id);
        });
    }
    update(id, userDto) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
        });
    }
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        app.enableCors();
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map