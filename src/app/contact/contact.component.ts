import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../app.component.scss'],
})
export class ContactComponent {
  sendMessage = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rs6fa0k',
        'template_u2opf95',
        e.target as HTMLFormElement,
        'user_TRCqxU4g73cgjdpmbww0s'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.sendMessage = true;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
