import { RouterTestingModule } from '@angular/router/testing';
import { Shallow } from 'shallow-render';
import { CategoryService } from './category.service';

// describe('CategoryService', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [ HttpClientTestingModule, RouterTestingModule ],
//     providers: [ CategoryService, QuestionService ],
//   }));

//   it('should be created', () => {
//     const service: CategoryService = TestBed.get(CategoryService);
//     expect(service).toBeTruthy();
//   });
// });
describe(CategoryService.name, () => {
  let shallow: Shallow<CategoryService>;

  beforeEach(() => {
    shallow = new Shallow(CategoryService, RouterTestingModule);
  });

  it('Uses the color from the RedService', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
