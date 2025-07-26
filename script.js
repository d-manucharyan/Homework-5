class Company {
    static workHours = '10:00 - 18:00'
    #salary = 200_000

    constructor(fName, lName) {
        this.fName = fName
        this.lName = lName
    }

    sayHi() {
        console.log(`Working times are ${Company.workHours}`)
    }

    get salary() {
        return this.#salary
    }

    set salary(value) {
        if (typeof value === 'number') {
            this.#salary = value
        } else {
            console.log('Not valid value for salary')
        }
    }
}

class PM extends Company {
    static workHours = '11:00 - 18:00'

    constructor(fName, lName) {
        super(fName, lName)
        this.role = 'Product Manager'
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${PM.workHours}`)
    }
}

class TeamLead extends Company {
    static workHours = '11:00 - 18:00'

    constructor(fName, lName) {
        super(fName, lName)
        this.role = 'Team Lead'
        this.subordinates = []
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${TeamLead.workHours}`)
    }

    addSubordinate(person) {
        this.subordinates.push(person)
    }

    showTeam() {
        console.log(`${this.fName} ${this.lName}'s team:`)
        this.subordinates.forEach((member, i) => {
            console.log(`  ${i + 1}. ${member.fName} ${member.lName} - ${member.role}`)
        })
    }
}

class Programmer extends TeamLead {
    constructor(fName, lName, role) {
        super(fName, lName)
        this.role = `${role} Developer`
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${Company.workHours}`)
    }
}

class Tester extends TeamLead {
    constructor(fName, lName) {
        super(fName, lName)
        this.role = 'Tester'
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${Company.workHours}`)
    }
}

class Designer extends TeamLead {
    constructor(fName, lName) {
        super(fName, lName)
        this.role = 'Designer'
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${Company.workHours}`)
    }
}   

class Devopser extends TeamLead {
    constructor(fName, lName) {
        super(fName, lName)
        this.role = 'Devops Engineer'
    }

    sayHi() {
        console.log(`Hello, I am ${this.fName} ${this.lName} and I am ${this.role}. My working times are ${Company.workHours}`)
    }
}
//! ----- Results -----

const pm = new PM('Poghos', 'Poghosyan')
pm.salary = 300_000
pm.sayHi()

const lead = new TeamLead('Petros', 'Petrosyan')
lead.salary = 300_000
lead.sayHi()

const frontEnder = new Programmer('Martiros', 'Martirosyan', 'Frontend')
const backEnder = new Programmer('Vardan', 'Vardanyan', 'Backend')
const tester = new Tester('Khachatur', 'Khachaturyan')
const designer = new Designer('Anush', 'Margaryan')
const devopser = new Devopser('Ruben', 'Rubenyan')

frontEnder.sayHi()
backEnder.sayHi()
tester.sayHi()
designer.sayHi()
devopser.sayHi()

lead.addSubordinate(frontEnder)
lead.addSubordinate(backEnder)
lead.addSubordinate(tester)
lead.addSubordinate(designer)
lead.addSubordinate(devopser)

lead.showTeam()