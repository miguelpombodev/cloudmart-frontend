export default interface User {
  name: string;
  email: string;
  hasAvatar: boolean;
  avatarUrl: string | null;
  initials: string;
  createdAt: string;
}
