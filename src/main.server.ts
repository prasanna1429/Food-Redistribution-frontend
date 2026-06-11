import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideServerRendering } from '@angular/platform-server';

    const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, {
        providers: [
            
            provideRouter(routes),
            provideServerRendering(),
        ],
    },context);

export default bootstrap;
