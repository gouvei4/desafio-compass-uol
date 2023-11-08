import { Tutor } from "../models/tutor";

const Tutors: Tutor[] = [
  {
    id: 1,
    name: "Afonso",
    phone: 99876235,
    email: "gouveia@gmail.com",
    date_of_birth: new Date("01-06-1998"),
    zip_code: 11920 - 200,
    pets: [
      {
        id: 1,
        name: "Ale",
        species: "dog",
        carry: "M",
        weight: 5,
        date_of_birth: new Date("07-12-1995"),
      },
      {
        id: 2,
        name: "Fonso",
        species: "cat",
        carry: "G",
        weight: 6,
        date_of_birth: new Date("01-06-1998"),
      },
    ],
  }, {
    id: 2,
    name: "Camila",
    phone: 998956234,
    email: "lavaiele@gmail.com",
    date_of_birth: new Date("07-12-1998"),
    zip_code: 11920-229,
    pets: [
        {
            id: 1,
            name: "Zezinho",
            species: "cat",
            carry: "P",
            weight: 2,
            date_of_birth: new Date("06-10-2023")
    }]
  }
];
