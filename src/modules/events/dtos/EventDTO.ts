export interface EventDTO {
  id?: string;
  name: string;
  date: Date;
  description: string;
  categories_id?: string;
  location_id?: string;
}
