interface Hero {
    id: number,
    name: string,
    owner: string
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    }, 
    {
        id: 2,
        name: 'Hulk',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }
]