export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          name: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          email: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          name?: string | null;
        };
      };
    };
  };
}; 