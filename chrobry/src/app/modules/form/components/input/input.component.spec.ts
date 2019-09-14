import { InputComponent } from './input.component';
import { FormModule } from '../../form.module';
import { Shallow } from 'shallow-render';
import { FormControl, FormArray } from '@angular/forms';

describe(InputComponent.name, () => {
  let shallow: Shallow<InputComponent>;

  beforeEach(() => {
    shallow = new Shallow(InputComponent, FormModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render({
      bind: { parentForm: new FormArray([new FormControl('abc')]) }
    });

    expect(instance).toBeTruthy();
  });
});
