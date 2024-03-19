const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    User: prisma.user,
    Course: prisma.course,
    Testimonial: prisma.testimonial,
    CourseClass: prisma.courseClass,
    Achievment: prisma.achievement,
    Tag: prisma.tag,
    Bulletin: prisma.bulletin,
    BranchOffice: prisma.branchOffice,

    prisma: prisma,
    
}