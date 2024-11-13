import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEntity, EntityWithId } from '../models/base-entity.model';
import { BASE_URL } from 'src/app/app.constants';

type DefaultPost<T extends BaseEntity> = Omit<T, keyof BaseEntity>;
type DefaultPatch<T extends BaseEntity> = Partial<DefaultPost<T>> &
  EntityWithId;
type QueryParam = Record<
  string,
  | string
  | number
  | boolean
  | readonly string[]
  | readonly number[]
  | readonly boolean[]
>;

export abstract class ResourceService<
  Entity extends BaseEntity,
  EntityToPost = DefaultPost<Entity>,
  EntityToPatch extends EntityWithId = DefaultPatch<Entity>,
> {
  protected resourceUrl = BASE_URL;

  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
  ) {}

  public create(item: EntityToPost): Observable<Entity> {
    return this.httpClient.post<Entity>(
      `${this.resourceUrl}/${this.endpoint}`,
      item,
    );
  }

  public update(item: EntityToPatch): Observable<Entity> {
    return this.httpClient.put<Entity>(
      `${this.resourceUrl}/${this.endpoint}/${item.id}`,
      item,
    );
  }

  read(id: number): Observable<Entity> {
    return this.httpClient.get<Entity>(
      `${this.resourceUrl}/${this.endpoint}/${id}`,
    );
  }

  list(params: HttpParams | QueryParam = {}): Observable<Entity[]> {
    const requestString = `${this.resourceUrl}/${this.endpoint}`;
    return this.httpClient.get<Entity[]>(`${requestString}`, { params });
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.resourceUrl}/${this.endpoint}/${id}`);
  }
}
