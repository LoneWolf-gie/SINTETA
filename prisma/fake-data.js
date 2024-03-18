const { Role, Grade } = require('@prisma/client'),
    { faker } = require('@faker-js/faker/locale/id_ID'),
    bcrypt = require('bcrypt');


function fakeUser() {
    return {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(5)),
        resetPasswordToken: undefined,
        verificationToken: undefined,
        role: faker.helpers.arrayElement([Role.user, Role.admin, Role.superadmin]),
    };
}


function fakeCourse() {
    const price = faker.number.int({ min: 99000, max: 1000000 });
    const discount = faker.number.int({ min: 50000, max: 99000 });
    return {
        title: faker.lorem.words(5),
        pictureCourse: faker.image.url(),
        price: price,
        discount: discount,
        totalPrice: price - discount,
        about: faker.lorem.words(50),
        description: faker.lorem.words(5),
        expired: faker.date.future().toDateString(),
        grade: faker.helpers.arrayElement([Grade.sd, Grade.smp, Grade.sma]),
    };
}


module.exports = {
    fakeUser,
    fakeCourse
}