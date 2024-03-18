const {User, Course, prisma} = require('../model/index')

const {fakeUser, fakeCourse} = require('./fake-data')

async function seed() {
    for(let i = 0; i < 5; i++) {
        await User.create({
            data: fakeUser()
        })
    }

    for(let i = 0; i < 5; i++) {
        await Course.create({
            data: fakeCourse()
        })
    }

    console.log('Seeder selesai.');
    await prisma.$disconnect();
}

seed();