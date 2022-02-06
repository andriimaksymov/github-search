export interface IUsers {
  items?: object[]
}

export interface IUserData {
  login: string,
  avatar_url: string,
  name: string
  repos_url: string,
}

export interface IProfileData {
  avatar_url: string,
  name: string,
  email: string,
  location: string,
  created_at: string,
  repos_url: string,
  following: number,
  followers: number,
  bio: string,
}

export interface IAppContext {
  users: IUsers,
  setUsers: (data: object) => void,
}

