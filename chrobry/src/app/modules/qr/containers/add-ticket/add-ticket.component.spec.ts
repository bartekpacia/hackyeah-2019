
import { Shallow } from 'shallow-render';
import { QrModule } from '../../qr.module';
import { AddTicketComponent } from './add-ticket.component';

fdescribe(AddTicketComponent.name, () => {
  let shallow: Shallow<AddTicketComponent>;

  beforeEach(() => {
    shallow = new Shallow(AddTicketComponent, QrModule);
      // .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);

  });

  it('should create', async () => {
    const { instance } = await shallow.render({});

    expect(instance).toBeTruthy();
  });
});
