import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOnHomePageComponent } from './block-on-home-page.component';

describe('BlockOnHomePageComponent', () => {
  let component: BlockOnHomePageComponent;
  let fixture: ComponentFixture<BlockOnHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockOnHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOnHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
