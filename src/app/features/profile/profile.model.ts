export interface Profile {
    id: string;
    username: string;
    display_name: string | null; // in der DB nullable
    created_at: string;
  }