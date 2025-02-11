const user = {
  name: "Tobias",
  address: {
    city: "Berlin",
    coordinates: {
      lat: 52.52,
      long: 13.405,
    },
  },
};

const { lat, long } = user.address.coordinates;  // Fix this line!
console.log(lat, long);