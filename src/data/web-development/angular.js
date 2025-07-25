import { FaAngular } from 'react-icons/fa';

export const angularContent = {
  icon: FaAngular,
  title: 'Angular',
  color: '#DD0031',
  description: 'A comprehensive Angular reference covering components, directives, services, dependency injection, modules, routing, forms, HTTP client, state management, and advanced patterns.',
  sections: [
    // 1. Angular Fundamentals
    {
      id: 'fundamentals',
      title: 'Angular Fundamentals',
      examples: [
        {
          title: 'Components',
          code: `// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <h1>{{title}}</h1>
    <app-hero [hero]="hero"></app-hero>
  \`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = { id: 1, name: 'Windstorm' };
}

// hero.component.ts
@Component({
  selector: 'app-hero',
  template: \`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
    </div>
  \`
})
export class HeroComponent {
  @Input() hero: Hero;
}`,
          explanation: 'Components are the building blocks of Angular apps. Each has a selector (HTML tag), template (view), and class (behavior). @Input decorator allows parent-to-child data flow.'
        },
        {
          title: 'Templates & Data Binding',
          code: `// Interpolation
<h1>{{title}}</h1>

// Property binding
<img [src]="heroImageUrl">

// Event binding
<button (click)="onSave()">Save</button>

// Two-way binding
<input [(ngModel)]="hero.name">

// Template reference variables
<input #heroInput>
<button (click)="log(heroInput.value)">Log</button>`,
          explanation: 'Angular supports several binding types: interpolation ({{ }}), property ([ ]), event (( )), and two-way binding ([( )]). Template reference variables (#var) access DOM elements.'
        },
        {
          title: 'Directives',
          code: `// Structural directives (*ngIf, *ngFor)
<div *ngIf="heroes.length > 0">
  <h2>Heroes</h2>
  <ul>
    <li *ngFor="let hero of heroes">
      {{hero.name}}
    </li>
  </ul>
</div>

// Attribute directive
<p [ngClass]="{'active': isActive, 'disabled': isDisabled}">
  Conditional classes
</p>

// Custom directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`,
          explanation: 'Directives add behavior to DOM elements. Structural directives (*ngIf, *ngFor) alter layout. Attribute directives ([ngClass], [ngStyle]) change appearance. You can create custom directives.'
        }
      ]
    },
    // 2. Services & Dependency Injection
    {
      id: 'services-di',
      title: 'Services & Dependency Injection',
      examples: [
        {
          title: 'Creating Services',
          code: `// hero.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = \`\${this.heroesUrl}/\${id}\`;
    return this.http.get<Hero>(url);
  }
}`,
          explanation: 'Services are reusable data or logic providers. @Injectable decorator makes them injectable. providedIn: "root" makes them application-wide singletons.'
        },
        {
          title: 'Dependency Injection',
          code: `// Component using service
@Component({
  selector: 'app-hero-list',
  template: '...',
  providers: [HeroService] // Component-level provider
})
export class HeroListComponent {
  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

// Module-level providers
@NgModule({
  providers: [
    UserService,
    { provide: Logger, useClass: BetterLogger }
  ]
})
export class AppModule { }`,
          explanation: 'Angular has hierarchical DI. Services can be provided at root, module, or component level. Use constructor injection to get service instances.'
        }
      ]
    },
    // 3. Modules
    {
      id: 'modules',
      title: 'Modules',
      examples: [
        {
          title: 'NgModule Basics',
          code: `// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
          explanation: 'NgModule organizes related code into functional blocks. declarations: components/directives/pipes, imports: other modules, providers: services, bootstrap: root component.'
        },
        {
          title: 'Feature Modules',
          code: `// heroes/heroes.module.ts
@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  exports: [HeroSearchComponent]
})
export class HeroesModule { }

// app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule
  ],
  // ...
})
export class AppModule { }`,
          explanation: 'Feature modules organize code by application domain. They can be imported by other modules. exports make components available to other modules.'
        }
      ]
    },
    // 4. Routing
    {
      id: 'routing',
      title: 'Routing',
      examples: [
        {
          title: 'Basic Routing',
          code: `// app-routing.module.ts
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html
<nav>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  <a [routerLink]="['/hero', hero.id]">Details</a>
</nav>
<router-outlet></router-outlet>`,
          explanation: 'Routes map URLs to components. RouterLink navigates programmatically. RouterOutlet is where routed views appear. Wildcard (**) catches unmatched routes.'
        },
        {
          title: 'Route Guards',
          code: `// auth.guard.ts
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

// app-routing.module.ts
const routes: Routes = [
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: UserListComponent }
    ]
  }
];`,
          explanation: 'Guards control route access. CanActivate checks access to route. Other guards: CanActivateChild, CanDeactivate, Resolve (data), CanLoad (lazy loading).'
        },
        {
          title: 'Lazy Loading',
          code: `// admin-routing.module.ts
const routes: Routes = [
  { path: '', component: AdminComponent }
];

// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];`,
          explanation: 'Lazy loading loads feature modules on demand. Use loadChildren with dynamic import() to reference the module path. Reduces initial bundle size.'
        }
      ]
    },
    // 5. Forms
    {
      id: 'forms',
      title: 'Forms',
      examples: [
        {
          title: 'Template-Driven Forms',
          code: `// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  // ...
})

// hero-form.component.html
<form #heroForm="ngForm" (ngSubmit)="onSubmit(heroForm)">
  <input 
    name="name" 
    [(ngModel)]="hero.name" 
    required 
    minlength="4"
    #name="ngModel"
  >
  <div *ngIf="name.invalid && (name.dirty || name.touched)">
    <div *ngIf="name.errors.required">Name is required</div>
    <div *ngIf="name.errors.minlength">
      Name must be at least 4 characters
    </div>
  </div>
  <button type="submit" [disabled]="!heroForm.valid">Submit</button>
</form>`,
          explanation: 'Template-driven forms use directives in the template. ngForm tracks form state. ngModel provides two-way binding. Validation attributes (required, minlength) add validation.'
        },
        {
          title: 'Reactive Forms',
          code: `// app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  // ...
})

// hero-form.component.ts
import { FormBuilder, Validators } from '@angular/forms';

export class HeroFormComponent {
  heroForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    alterEgo: [''],
    power: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.heroForm.value);
  }
}

// hero-form.component.html
<form [formGroup]="heroForm" (ngSubmit)="onSubmit()">
  <input formControlName="name">
  <div *ngIf="heroForm.get('name').invalid">
    <!-- Show errors -->
  </div>
</form>`,
          explanation: 'Reactive forms provide model-driven approach. FormBuilder creates form groups. FormControl tracks individual controls. Validators add validation rules.'
        },
        {
          title: 'Custom Validators',
          code: `// forbidden-name.directive.ts
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameValidator,
    multi: true
  }]
})
export class ForbiddenNameValidator implements Validator {
  @Input() appForbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.appForbiddenName && 
           control.value === this.appForbiddenName
      ? { 'forbiddenName': {value: control.value} }
      : null;
  }
}

// Usage
this.heroForm = this.fb.group({
  name: ['', [
    Validators.required,
    this.forbiddenNameValidator('bob')
  ]]
});`,
          explanation: 'Custom validators implement Validator interface. Directive wraps validator for template forms. For reactive forms, create validator functions.'
        }
      ]
    },
    // 6. HTTP Client
    {
      id: 'http',
      title: 'HTTP Client',
      examples: [
        {
          title: 'Making HTTP Requests',
          code: `// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  // ...
})

// hero.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(catchError(this.handleError<Hero>('addHero')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}`,
          explanation: 'HttpClient provides HTTP methods (get, post, put, delete). Methods return Observables. Use RxJS operators (pipe, catchError) to handle responses and errors.'
        },
        {
          title: 'Interceptors',
          code: `// auth.interceptor.ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token')
    });
    return next.handle(authReq);
  }
}

// logging.interceptor.ts
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request:', req);
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response:', event);
        }
      })
    );
  }
}

// app.module.ts
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})`,
          explanation: 'Interceptors can inspect/modify requests and responses. Implement HttpInterceptor. Register with HTTP_INTERCEPTORS token. Multiple interceptors form a pipeline.'
        }
      ]
    },
    // 7. State Management (NgRx)
    {
      id: 'state-management',
      title: 'State Management (NgRx)',
      examples: [
        {
          title: 'NgRx Store Basics',
          code: `// app.module.ts
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers)
  ]
})

// heroes.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadHeroesSuccess } from './heroes.actions';

export const initialState: Hero[] = [];

export const heroesReducer = createReducer(
  initialState,
  on(loadHeroesSuccess, (state, { heroes }) => [...heroes])
);

// heroes.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadHeroes = createAction('[Heroes] Load Heroes');
export const loadHeroesSuccess = createAction(
  '[Heroes] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);

// heroes.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      mergeMap(() => this.heroService.getHeroes()
        .pipe(
          map(heroes => loadHeroesSuccess({ heroes }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}
}

// heroes.component.ts
import { Store } from '@ngrx/store';
import { loadHeroes } from '../heroes.actions';

@Component({ /* ... */ })
export class HeroesComponent {
  heroes$ = this.store.select(state => state.heroes);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadHeroes());
  }
}`,
          explanation: 'NgRx provides Redux-like state management. Store holds application state. Reducers handle state changes. Actions describe events. Effects handle side effects. Selectors read state.'
        }
      ]
    },
    // 8. Advanced Topics
    {
      id: 'advanced',
      title: 'Advanced Topics',
      examples: [
        {
          title: 'Dynamic Components',
          code: `// ad-banner.component.ts
@Component({
  selector: 'app-ad-banner',
  template: \`
    <div class="ad-banner">
      <ng-template adHost></ng-template>
    </div>
  \`
})
export class AdBannerComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent() {
    const adItem = this.getAd();
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }
}

// ad.directive.ts
@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}`,
          explanation: 'Dynamic components are created programmatically. ComponentFactoryResolver creates component factories. ViewContainerRef hosts dynamic components.'
        },
        {
          title: 'Content Projection',
          code: `// panel.component.ts
@Component({
  selector: 'app-panel',
  template: \`
    <div class="panel">
      <div class="panel-header">
        <ng-content select=".panel-title"></ng-content>
      </div>
      <div class="panel-body">
        <ng-content select=".panel-content"></ng-content>
      </div>
    </div>
  \`
})

// app.component.html
<app-panel>
  <h1 class="panel-title">My Panel</h1>
  <div class="panel-content">
    <p>Panel content goes here</p>
  </div>
</app-panel>`,
          explanation: 'Content projection (ng-content) inserts external content into a component. select attribute matches projected content by CSS selector.'
        },
        {
          title: 'Internationalization (i18n)',
          code: `<!-- template with i18n -->
<h1 i18n="User welcome|An introduction header for this sample@@welcomeHeader">
  Hello i18n!
</h1>

<!-- extract translations -->
<target state="new" id="welcomeHeader" equiv-text="Hello i18n!">
  <source>Hello i18n!</source>
  <context-group purpose="location">
    <context context-type="sourcefile">app/app.component.html</context>
    <context context-type="linenumber">3</context>
  </context-group>
  <note priority="1" from="description">An introduction header for this sample</note>
  <note priority="1" from="meaning">User welcome</note>
</target>

<!-- french translation -->
<trans-unit id="welcomeHeader">
  <source>Hello i18n!</source>
  <target>Bonjour i18n !</target>
</trans-unit>`,
          explanation: 'Angular i18n extracts text for translation. i18n attribute marks translatable text. Use meaning (|) and description (@@) for context. Build with --localize flag.'
        }
      ]
    },
    // 9. Testing
    {
      id: 'testing',
      title: 'Testing',
      examples: [
        {
          title: 'Component Testing',
          code: `// hero-detail.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockHeroService;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['getHero', 'saveHero']);
    mockHeroService.getHero.and.returnValue(of({id: 1, name: 'Test Hero'}));

    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ]
    });

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display hero name in h2', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('TEST HERO');
  });

  it('should call saveHero when save is clicked', () => {
    const saveButton = fixture.nativeElement.querySelector('button');
    saveButton.click();
    expect(mockHeroService.saveHero).toHaveBeenCalled();
  });
});`,
          explanation: 'TestBed configures testing module. ComponentFixture provides access to component instance and DOM. Jasmine spies mock dependencies. detectChanges() triggers change detection.'
        },
        {
          title: 'Service Testing',
          code: `// hero.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return heroes', () => {
    const mockHeroes = [{ id: 1, name: 'Test Hero' }];

    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(1);
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpMock.expectOne('api/heroes');
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroes);
  });
});`,
          explanation: 'HttpClientTestingModule mocks HTTP requests. HttpTestingController verifies and flushes requests. TestBed.inject() gets service instances.'
        }
      ]
    },
    // 10. Angular CLI
    {
      id: 'cli',
      title: 'Angular CLI',
      examples: [
        {
          title: 'Common CLI Commands',
          code: `# Create new project
ng new my-app

# Generate components, services, etc
ng generate component hero-detail
ng g service hero
ng g module admin --route admin --module app.module

# Serve with live reload
ng serve --open

# Build for production
ng build --prod

# Run tests
ng test
ng e2e

# Add features
ng add @angular/material
ng add @ngrx/store`,
          explanation: 'Angular CLI automates development workflow. Generate command creates files with boilerplate. Serve runs dev server. Build compiles for production. Add integrates libraries.'
        },
        {
          title: 'Configuration (angular.json)',
          code: `{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true
            }
          }
        }
      }
    }
  }
}`,
          explanation: 'angular.json configures build targets, assets, styles, budgets, and environment files. Multiple configurations (e.g., production) customize build behavior.'
        }
      ]
    }
  ]
};