export interface IUsers {
  items?: object[]
}

export interface IUserData {
  login?: string,
  avatar?: string,
  name?: string
  repository?: string,
}

export interface IProfileData {

}

export interface IAppContext {
  users: IUsers,
  setUsers: (data: object) => void,
}

