export class User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  provider: string;

  public static getFromGoogle(googleUser: any): User {
    if (!googleUser) {
      return null;
    }

    const USER_INFO = googleUser.auth.providerData[0];

    return new User(USER_INFO.uid, USER_INFO.displayName, USER_INFO.photoURL, USER_INFO.email, USER_INFO.providerId);
  }

  private constructor(id: string, name: string, avatar: string, email: string, provider: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.email = email;
    this.provider = provider;
  }
}
