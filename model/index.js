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
    Office: prisma.office,
    Banner: prisma.banner,
    Facility: prisma.facility,
    Program: prisma.program,
    Promo: prisma.promo,
    Testimonial: prisma.testimonial,
    AcceptedUniversity: prisma.acceptedUniversity,
    Alumnae: prisma.alumnae,

    prisma: prisma,
    
}