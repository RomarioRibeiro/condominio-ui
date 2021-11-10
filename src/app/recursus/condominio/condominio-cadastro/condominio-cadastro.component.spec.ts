import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioCadastroComponent } from './condominio-cadastro.component';

describe('CondominioCadastroComponent', () => {
  let component: CondominioCadastroComponent;
  let fixture: ComponentFixture<CondominioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominioCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
