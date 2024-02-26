const bookData = {
    id: 1,
    title: "Muscle Shoals",
    categorie: 1,
    nbPages: 1,
    extrait: "Customizable intangible workforce",
    resume: "Decentralized secondary task-force",
    authorFirstName: "Bibbye",
    authorLastName: "Rosenqvist",
    editorFirstName: "Aloysia",
    editorLastName: "Bevir",
    editionYear: 1992,
    avgAppreciation: 1996,
    comments: "Netted rock dragon",
    cover: "http://dummyimage.com/232x100.png/5fa2dd/ffffff"
};

const fakeUserData = [
    { pseudo: "user1", subscribeDate: 11230123123, nbOuvrages: 5, nbAppreciation: 10, nbComments: 20 },
    { pseudo: "user2", subscribeDate: new Date("2022-02-15"), nbOuvrages: 3, nbAppreciation: 8, nbComments: 15 },
    { pseudo: "user3", subscribeDate: new Date("2022-03-20"), nbOuvrages: 7, nbAppreciation: 12, nbComments: 25 },
    { pseudo: "user4", subscribeDate: new Date("2022-04-10"), nbOuvrages: 2, nbAppreciation: 5, nbComments: 10 },
    { pseudo: "user5", subscribeDate: new Date("2022-05-05"), nbOuvrages: 6, nbAppreciation: 15, nbComments: 30 }
];

export {bookData, fakeUserData}