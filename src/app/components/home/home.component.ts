import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {faInstagram, faGithub, faFacebook,faLinkedin, faSpaceAwesome} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, MatFormFieldModule, MatInputModule,FormsModule,ReactiveFormsModule,MatButtonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faInstagram=faInstagram
  faGithub=faGithub
  faFacebook=faFacebook
  faLinkedin=faLinkedin
  faFilePdf =faFilePdf
  faSpaceAwesome =faSpaceAwesome

  contactForm: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      message: ['']
    });
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  updateErrorMessage() {
    if (this.email.invalid && (this.email.dirty || this.email.touched)) {
      if (this.email.errors?.['required']) {
        this.errorMsg = 'Email is required';
      } else if (this.email.errors?.['email']) {
        this.errorMsg = 'Invalid email format';
      } else {
        this.errorMsg = '';
      }
    }
  }

  errorMessage(): string {
    return this.errorMsg;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
  
      // Send email to yourself
      emailjs.send(
        'service_7y8adtg',
        'template_ea43dze',
        {
          full_name: formData.fullName,
          email: formData.email,
          company: formData.companyName,
          message: formData.message
        },
        'AeKFIFx4iDkhwO0Dq'
      )
      .then((response) => {
        console.log('Email to me sent!', response.status, response.text);
  
        // After sending to you, send Auto-reply
        emailjs.send(
          'service_7y8adtg',
          'template_hmwxwg5',
          {
            full_name: formData.fullName,
            email: formData.email
          },
          'AeKFIFx4iDkhwO0Dq'
        )
        .then((response) => {
          console.log('Auto-reply sent!', response.status, response.text);
          this.contactForm.reset();
        }, (error) => {
          console.error('Auto-reply failed...', error);
        });
        
          Swal.fire({
            icon: "success",
            title: "message received!",
            
          });
      }, (error) => {
        console.error('FAILED...', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
}
