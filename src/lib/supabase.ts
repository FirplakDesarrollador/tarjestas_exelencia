import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

/* 
INSTRUCCIONES PARA BASE DE DATOS (SUPABASE)
Asegúrese de ejecutar las siguientes sentencias SQL en Supabase para crear las tablas necesarias:

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  icon TEXT DEFAULT 'HelpCircle'
);

CREATE TABLE tarjetas (
  id SERIAL PRIMARY KEY,
  categoria_id INTEGER REFERENCES categorias(id),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  pasos JSONB DEFAULT '[]',
  puntos_clave JSONB DEFAULT '[]',
  errores_comunes JSONB DEFAULT '[]',
  buenas_practicas JSONB DEFAULT '[]',
  ejemplo TEXT
);

CREATE TABLE historial_chat (
  id SERIAL PRIMARY KEY,
  usuario TEXT,
  pregunta TEXT,
  respuesta TEXT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Permisos RLS (Row Level Security)
ALTER TABLE categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarjetas ENABLE ROW LEVEL SECURITY;
ALTER TABLE historial_chat ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública
CREATE POLICY "Lectura pública para categorias" ON categorias FOR SELECT USING (true);
CREATE POLICY "Lectura pública para tarjetas" ON tarjetas FOR SELECT USING (true);
*/
