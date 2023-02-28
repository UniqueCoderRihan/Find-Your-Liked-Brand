let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 7
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "blue",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity":12
    },
    {
      "color": "green",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 15
    }
]
let type = cars.find(type => type.type ==='station wagon' && type.color ==='blue' && type.capacity ===15)

console.log(type);