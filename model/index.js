const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    User: prisma.user,
    Course: prisma.course,
    Review: prisma.review,
    CourseClass: prisma.courseClass,
    Achievment: prisma.achievement,
    prisma: prisma,
    
}