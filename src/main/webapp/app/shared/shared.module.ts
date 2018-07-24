import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { FlotillaApplicationSharedLibsModule, FlotillaApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [FlotillaApplicationSharedLibsModule, FlotillaApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [FlotillaApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlotillaApplicationSharedModule {}
