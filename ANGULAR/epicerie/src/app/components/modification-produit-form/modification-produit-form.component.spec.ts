import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationProduitFormComponent } from './modification-produit-form.component';

describe('ModificationProduitFormComponent', () => {
  let component: ModificationProduitFormComponent;
  let fixture: ComponentFixture<ModificationProduitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationProduitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationProduitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
