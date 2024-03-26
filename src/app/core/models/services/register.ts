export class Register {
  rut: string;
  service: string;
  description: string;
  license: string;
  experience: number;
  recommendation: string;
  user_id: string;

  constructor(
    rut: string,
    service: string,
    description: string,
    license: string,
    experience: number,
    recommendation: string,
    user_id: string
  ) {
    this.rut = rut;
    this.service = service;
    this.description = description;
    this.license = license;
    this.experience = experience;
    this.recommendation = recommendation;
    this.user_id = user_id;
  }
}
