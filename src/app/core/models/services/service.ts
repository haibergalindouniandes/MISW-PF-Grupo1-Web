export class Service {
  id: string;
  rut: string;
  service: string;
  description: string;
  license: string;
  experience: number;
  recommendation: string;
  user_id: string;
  create_date: string;
  update_date: string;

  constructor(
    id: string,
    rut: string,
    service: string,
    description: string,
    license: string,
    experience: number,
    recommendation: string,
    user_id: string,
    create_date: string,
    update_date: string
  ) {
    this.id = id;
    this.rut = rut;
    this.service = service;
    this.description = description;
    this.license = license;
    this.experience = experience;
    this.recommendation = recommendation;
    this.user_id = user_id;
    this.create_date = create_date;
    this.update_date = update_date;
  }
}
