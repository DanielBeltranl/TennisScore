/**
 * Auto-generated TypeScript types from Supabase database schema
 * Generated via Supabase MCP
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      matches: {
        Row: {
          created_at: string
          current_set: number | null
          id: string
          is_finished: boolean | null
          is_public: boolean | null
          match_type: string
          p1_team: number
          p2_team: number
          p3_team: number | null
          p4_team: number | null
          player1_id: string
          player2_id: string
          player3_id: string | null
          player4_id: string | null
          share_code: string
          t1_games_current_set: number | null
          t1_points_current_game: string | null
          t1_sets_won: number | null
          t2_games_current_set: number | null
          t2_points_current_game: string | null
          t2_sets_won: number | null
          total_sets: number
        }
        Insert: {
          created_at?: string
          current_set?: number | null
          id?: string
          is_finished?: boolean | null
          is_public?: boolean | null
          match_type: string
          p1_team: number
          p2_team: number
          p3_team?: number | null
          p4_team?: number | null
          player1_id: string
          player2_id: string
          player3_id?: string | null
          player4_id?: string | null
          share_code: string
          t1_games_current_set?: number | null
          t1_points_current_game?: string | null
          t1_sets_won?: number | null
          t2_games_current_set?: number | null
          t2_points_current_game?: string | null
          t2_sets_won?: number | null
          total_sets?: number
        }
        Update: {
          created_at?: string
          current_set?: number | null
          id?: string
          is_finished?: boolean | null
          is_public?: boolean | null
          match_type?: string
          p1_team?: number
          p2_team?: number
          p3_team?: number | null
          p4_team?: number | null
          player1_id?: string
          player2_id?: string
          player3_id?: string | null
          player4_id?: string | null
          share_code?: string
          t1_games_current_set?: number | null
          t1_points_current_game?: string | null
          t1_sets_won?: number | null
          t2_games_current_set?: number | null
          t2_points_current_game?: string | null
          t2_sets_won?: number | null
          total_sets?: number
        }
        Relationships: [
          {
            foreignKeyName: "matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player3_id_fkey"
            columns: ["player3_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_player4_id_fkey"
            columns: ["player4_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          birthdate: string | null
          country: string | null
          id: string
          name: string
        }
        Insert: {
          birthdate?: string | null
          country?: string | null
          id?: string
          name: string
        }
        Update: {
          birthdate?: string | null
          country?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      sets: {
        Row: {
          id: string
          match_id: string
          set_number: number
          t1_games: number
          t1_tiebreak_points: number | null
          t2_games: number
          t2_tiebreak_points: number | null
        }
        Insert: {
          id?: string
          match_id: string
          set_number: number
          t1_games: number
          t1_tiebreak_points?: number | null
          t2_games: number
          t2_tiebreak_points?: number | null
        }
        Update: {
          id?: string
          match_id?: string
          set_number?: number
          t1_games?: number
          t1_tiebreak_points?: number | null
          t2_games?: number
          t2_tiebreak_points?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sets_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types for easier access
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Convenience exports
export type DbMatch = Tables<'matches'>
export type DbPlayer = Tables<'players'>
export type DbSet = Tables<'sets'>

export type InsertMatch = InsertTables<'matches'>
export type InsertPlayer = InsertTables<'players'>
export type InsertSet = InsertTables<'sets'>

export type UpdateMatch = UpdateTables<'matches'>
export type UpdatePlayer = UpdateTables<'players'>
export type UpdateSet = UpdateTables<'sets'>
