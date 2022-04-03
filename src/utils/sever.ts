import { createServer } from "miragejs";

export const CreateSever = () =>
  createServer({
    routes() {
      this.namespace = "api";
      this.get(
        "/properties",
        () => {
          return {
            data: [
              {
                id: 1,
                city: "Atlanta",
                state: "Georgia",
                type: "Condo",
                price: 371,
              },
              {
                id: 2,
                city: "Atlanta",
                state: "Georgia",
                type: "Apartment",
                price: 218,
              },
              {
                id: 3,
                city: "Atlanta",
                state: "Georgia",
                type: "Single-family",
                price: 848,
              },
              {
                id: 4,
                city: "Clearwater",
                state: "Florida",
                type: "Townhomes",
                price: 2823,
              },
              {
                id: 5,
                city: "Clearwater",
                state: "Florida",
                type: "Apartment",
                price: 1309,
              },
              {
                id: 6,
                city: "Clearwater",
                state: "Florida",
                type: "Condo",
                price: 2914,
              },
              {
                id: 7,
                city: "Clearwater",
                state: "Florida",
                type: "Single-family",
                price: 2266,
              },
              {
                id: 8,
                city: "Atlanta",
                state: "Georgia",
                type: "Single-family",
                price: 7266,
              },
              {
                id: 9,
                city: "Atlanta",
                state: "Georgia",
                type: "Townhomes",
                price: 4614,
              },
              {
                id: 10,
                city: "Atlanta",
                state: "Georgia",
                type: "Apartment",
                price: 3813,
              },
              {
                id: 11,
                city: "Columbus",
                state: "Georgia",
                type: "Condo",
                price: 6153,
              },
              {
                id: 12,
                city: "Columbus",
                state: "Georgia",
                type: "Single-family",
                price: 5888,
              },
              {
                id: 13,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 846,
              },
              {
                id: 14,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 1112,
              },
              {
                id: 15,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 4193,
              },
              {
                id: 16,
                city: "Columbus",
                state: "Georgia",
                type: "Condo",
                price: 6193,
              },
              {
                id: 17,
                city: "Seattle",
                state: "Washington",
                type: "Single-family",
                price: 6193,
              },
              {
                id: 18,
                city: "Seattle",
                state: "Washington",
                type: "Condo",
                price: 6237,
              },
              {
                id: 19,
                city: "Seattle",
                state: "Washington",
                type: "Single-family",
                price: 2813,
              },
              {
                id: 20,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 321,
              },
              {
                id: 21,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 913,
              },
              {
                id: 22,
                city: "Columbus",
                state: "Georgia",
                type: "Apartment",
                price: 913,
              },
              {
                id: 23,
                city: "Atlanta",
                state: "Georgia",
                type: "Condo",
                price: 115,
              },
              {
                id: 24,
                city: "Atlanta",
                state: "Georgia",
                type: "Condo",
                price: 735,
              },
            ],
          };
        },
        { timing: 1500 }
      );
    },
  });
