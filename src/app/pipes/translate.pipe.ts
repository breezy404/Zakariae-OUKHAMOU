import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // To update on signal change
})
export class AppTranslatePipe implements PipeTransform {
    private translationService = inject(TranslationService);

    transform(key: string): string {
        return this.translationService.translate(key);
    }
}
