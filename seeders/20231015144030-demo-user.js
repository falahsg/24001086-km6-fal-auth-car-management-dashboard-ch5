"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: "Falah",
        age: 21,
        address: "Jakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Surya",
        age: 20,
        address: "Jakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gemilang",
        age: 20,
        address: "Jakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ananda",
        age: 23,
        address: "Depok",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ias",
        age: 22,
        address: "Jakarta",
        role: "Superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const insertUsers = await queryInterface.bulkInsert("Users", users, {
      returning: true,
    });

    const passwords = [
      "$2a$10$w21UZzMLTtQBAem8xZYqQOjw4gfv/I4x61J3SuCtMZCpVM6p5E9TC",
      "$2a$10$M4V45l3wCRfrXkOBEchvOe6ymWBIsBaTdcKr/smXL7ChUJFescH5q",
      "$2a$10$isuqDbs2rfTVxZkTE/Vp8.Tt0H/Hhjqpl8cQ6668obTzUWiZ8.5BK",
      "$2a$10$jb9ioXQNwbTrByIg..Dy9OLmDzXtosm/2toXDuNCtRKphoqcF2p2K",
      "$2a$10$Zs/ms7.jzQeHh1GPX14hS.FgpbCGDN9W8cw5SZ1X.4jqaf/yEAyFO",
    ];

    const auths = insertUsers.map((user, index) => ({
      email: `${user.name}@gmail.com`,
      password: passwords[index],
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Auths", auths);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
