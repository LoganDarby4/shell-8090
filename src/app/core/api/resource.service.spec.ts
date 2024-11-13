import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/app.constants';
import { BaseEntity } from '../models/base-entity.model';
import { Injectable } from '@angular/core';

interface TestEntity extends BaseEntity {
  name: string;
}

@Injectable()
class TestResourceService extends ResourceService<TestEntity> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'test-endpoint');
  }
}

describe('ResourceService', () => {
  let service: TestResourceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestResourceService],
    });

    service = TestBed.inject(TestResourceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an entity', () => {
    const newEntity: TestEntity = { id: 1, name: 'Test Entity' } as TestEntity;

    service.create(newEntity).subscribe((response) => {
      expect(response).toEqual(newEntity);
    });

    const req = httpMock.expectOne(`${BASE_URL}/test-endpoint`);
    expect(req.request.method).toBe('POST');
    req.flush(newEntity);
  });

  it('should update an entity', () => {
    const updatedEntity: TestEntity = {
      id: 1,
      name: 'Updated Entity',
    } as TestEntity;

    service.update(updatedEntity).subscribe((response) => {
      expect(response).toEqual(updatedEntity);
    });

    const req = httpMock.expectOne(`${BASE_URL}/test-endpoint/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedEntity);
  });

  it('should read an entity by id', () => {
    const entity: TestEntity = { id: 1, name: 'Test Entity' } as TestEntity;

    service.read(1).subscribe((response) => {
      expect(response).toEqual(entity);
    });

    const req = httpMock.expectOne(`${BASE_URL}/test-endpoint/1`);
    expect(req.request.method).toBe('GET');
    req.flush(entity);
  });

  it('should list entities', () => {
    const entities: TestEntity[] = [
      { id: 1, name: 'Entity 1' },
      { id: 2, name: 'Entity 2' },
    ] as TestEntity[];

    service.list().subscribe((response) => {
      expect(response).toEqual(entities);
    });

    const req = httpMock.expectOne(`${BASE_URL}/test-endpoint`);
    expect(req.request.method).toBe('GET');
    req.flush(entities);
  });

  it('should delete an entity by id', () => {
    service.delete(1).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${BASE_URL}/test-endpoint/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
