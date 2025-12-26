-- Tabla de Jugadores
CREATE TABLE players (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT,
  birthdate DATE
);


-- Tabla de Partidos (Estado principal)
CREATE TABLE matches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Jugadores
  player1_id UUID REFERENCES players(id) ON DELETE CASCADE NOT NULL,
  player2_id UUID REFERENCES players(id) ON DELETE CASCADE NOT NULL,
  player3_id UUID REFERENCES players(id) ON DELETE CASCADE, -- Opcional para dobles
  player4_id UUID REFERENCES players(id) ON DELETE CASCADE, -- Opcional para dobles

  -- Team side
  p1_team INT NOT NULL,
  p2_team INT NOT NULL,
  p3_team INT,
  p4_team INT,

  -- Configuración del partido
  match_type TEXT NOT NULL CHECK (match_type IN ('singles', 'doubles')),
  total_sets INT NOT NULL DEFAULT 3 CHECK (total_sets IN (1, 3, 5)),

  -- Marcador en tiempo real
  current_set INT DEFAULT 1,
  t1_sets_won INT DEFAULT 0,
  t2_sets_won INT DEFAULT 0,
  t1_games_current_set INT DEFAULT 0,
  t2_games_current_set INT DEFAULT 0,
  t1_points_current_game TEXT DEFAULT '0', -- '0', '15', '30', '40', 'AD'
  t2_points_current_game TEXT DEFAULT '0',
  
  -- Estado final
  is_finished BOOLEAN DEFAULT false,
  
  -- Acceso
  share_code TEXT UNIQUE NOT NULL, -- Código corto tipo 'XT49Z'
  is_public BOOLEAN DEFAULT true
);



-- Tabla de Sets (Detalle histórico)
CREATE TABLE sets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE NOT NULL,
  set_number INT NOT NULL,
  t1_games INT NOT NULL,
  t2_games INT NOT NULL,
  t1_tiebreak_points INT,
  t2_tiebreak_points INT,
  unique(match_id, set_number)
);

-- 3. Habilitar Realtime
-- Esto permite que Supabase escuche cambios en estas tablas
ALTER PUBLICATION supabase_realtime ADD TABLE matches;
ALTER PUBLICATION supabase_realtime ADD TABLE sets;
ALTER PUBLICATION supabase_realtime ADD TABLE players;
