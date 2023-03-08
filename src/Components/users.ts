export type userType = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  profile: [
    {
      id: string;
      profile: string;
      date: string;
    }
  ];
};

const users: userType[] = [
  {
    id: "d7fcbda1-9515-4e02-b9c7-cf8e11e8d661",
    firstname: "firstname1",
    lastname: "lastname1",
    username: "user1",
    email: "user1@gmail.com",
    phone: "0912345678",
    bio: "this is user1",
    profile: [
      {
        id: "a355fdc4-b67b-421e-bd10-19f8b9d542b4",
        profile: "./files/user1/profile/791px-Jalais_Hill,_Pontoise.jpg",
        date: "2023-01-27T11:22:08.855Z",
      },
    ],
  },
  {
    id: "cc88784a-4acc-464c-94ce-27341da06976",
    firstname: "firstname2",
    lastname: "lastname2",
    username: "user2",
    email: "user2@gmail.com",
    phone: "0912345677",
    bio: "this is user2",
    profile: [
      {
        id: "7ca325a7-f1d7-4caf-9d66-1939d92ed029",
        profile:
          "./files/user2/profile/Blue.Planet.II.S01E01.One.Ocean.1080p.AMZN.WEB-DL.x264-Rapta.mkv_20200901_171105.833.jpg",
        date: "2023-01-27T11:32:55.928Z",
      },
    ],
  },
];

export function getUsers(): Promise<userType[]> {
  return Promise.resolve(users);
}

export function getUser(id: string) {
  const user = users.find(u => u.id === id);
  return Promise.resolve(user);
}

export async function usersLoader() {
  const users = await getUsers();
  return { users };
}

export async function userLoader({ params }: any) {
  const { id } = params as userType;
  const user = await getUser(id);
  if (user)
  return { user };
}
