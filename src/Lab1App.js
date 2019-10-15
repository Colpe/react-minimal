import React from 'react'
import { randomBytes } from 'crypto';

class PeopleList extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    )
  }
}

class Lab1App extends React.Component {

  state = {
    people: data
  }

  render() {
    return (
      <div>
        <h1>Minimal React delimatj</h1>
        <p>Bundle size: 58 bytes, Load time of the bundle: 52 ms, Last commit: Customize headline</p>
        <button onClick={this.showAllStudents} >All students</button>
        <button onClick={this.showAllStudentsSorted} >All students sorted</button>
        <button onClick={()=>this.showAllStudentsFromActiveTeacherAndWithMinAge(true,20)} >All students from active teacher with min age</button>
        <PeopleList>{this.peopleList(this.state.people)}</PeopleList>
      </div>
    )
  }

  peopleList = (data) => {
    return data.map(d => {
      return (<PersonDisplay key={Math.random()} person={d} />);
    }
    );
  }

  stateSetter = (data) => {
    this.setState({
      people: data
    });
  }

  takeAllStudents = () => {
    var people = [];
    data.forEach(x => {
      x.students.forEach(s => {
        people.push(s);
      })
    });
    return people;
  }

  showAllStudents = () => {
    const people = this.takeAllStudents();
    this.stateSetter(people);
  }

  showAllStudentsSorted = () => {
    var people = this.takeAllStudents();
    var peopleSorted = people.sort(function (x, y) {
      return x.name > y.name ? 1 : -1;
    });
    this.stateSetter(peopleSorted);
  }

  showAllStudentsFromActiveTeacherAndWithMinAge = (isActive, minAge) => {
    var people = [];
    data.forEach(x => {
      if (x.active === isActive)
        x.students.forEach(s => {
          if (s.age > minAge)
            people.push(s);
        })
    });

    this.stateSetter(people);
  }
}

const PersonDisplay = ({ person }) => {
  return (
    <p>{person.name} {person.age}</p>);
}

const generateArray = (n) => (Array.from(Array(n), (x, index) => index + 1))
console.log(generateArray(10));

const generateRandomArray = (n) => (Array.from(Array(n), (x, index) => Math.ceil(Math.random() * 24 + 1)))
console.log(generateRandomArray(10));

const array = [2, 56, 23, 88, 17, 4];
console.log(array.filter(x => x > 15));

const array5 = [2, 5, 8, 10];
console.log(array5.map(x => Math.sqrt(x)));


var data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

export default Lab1App