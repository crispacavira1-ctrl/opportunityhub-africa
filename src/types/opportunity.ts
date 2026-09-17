export interface Opportunity {
  id: string
  title: string
  description: string
  type: 'bolsas' | 'empregos' | 'estagios' | 'cursos' | 'internacional' | 'competicoes'
  location: string
  deadline: string | null
  external_url: string | null
  created_at: string
}