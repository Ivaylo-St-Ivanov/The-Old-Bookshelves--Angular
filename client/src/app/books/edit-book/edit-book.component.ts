import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
    constructor(private fb: FormBuilder) {}

    form = this.fb.group({
        bookName: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        author: ['', [Validators.required]],
        cover:  [''],
        coverPrice: ['', [Validators.required, Validators.min(0)]],
        price: ['', [Validators.required, Validators.min(0)]],
        description: ['']
    });

    onEditBookSubmit(): void {
        if (this.form.invalid) {
            return;
        }
    }
}
