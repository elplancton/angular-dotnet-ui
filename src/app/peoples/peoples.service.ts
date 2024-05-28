import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { People } from './people.entity';

@Injectable({ providedIn: 'root' })
export class PeoplesService {
  private readonly endpoint = environment.api.endpoint + '/pessoas';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly httpClient: HttpClient) {}

  /* CREATE */
  create(people: Omit<People, 'pessoaId'>) {
    return this.httpClient.post<People>(this.endpoint, people);
  }

  /* READ */
  findAll() {
    return this.httpClient.get<People[]>(this.endpoint);
  }

  /* READ */
  find(id: number) {
    return this.httpClient.get<People>(`${this.endpoint}/${id}`);
  }

  /* UPDATE */
  update(id: number, people: People) {
    return this.httpClient.put<People>(
      `${this.endpoint}/${id}`,
      people,
      this.httpOptions
    );
  }

  /* DELETE */
  remove(id: number) {
    return this.httpClient.delete<People>(
      `${this.endpoint}/${id}`,
      this.httpOptions
    );
  }
}
