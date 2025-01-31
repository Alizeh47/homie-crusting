export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          updated_at?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          updated_at?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      stories: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string
          created_at: string
          updated_at: string
          emotion_tags: string[]
          location: string | null
          media_urls: string[]
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id: string
          created_at?: string
          updated_at?: string
          emotion_tags?: string[]
          location?: string | null
          media_urls?: string[]
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author_id?: string
          created_at?: string
          updated_at?: string
          emotion_tags?: string[]
          location?: string | null
          media_urls?: string[]
        }
      }
      emotions: {
        Row: {
          id: string
          name: string
          description: string
          created_at: string
          cultural_context: Json
        }
        Insert: {
          id?: string
          name: string
          description: string
          created_at?: string
          cultural_context: Json
        }
        Update: {
          id?: string
          name?: string
          description?: string
          created_at?: string
          cultural_context?: Json
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 