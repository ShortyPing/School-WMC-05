import {Component} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.scss']
})
export class QuadraticComponent {

  constructor(private http: HttpClient) {
  }
  calculatedValue?: number

  form = new FormBuilder().group({
    number: new FormControl(0)
  })

  async submit() {
    if(this.form.valid) {
      this.calculatedValue = await firstValueFrom(this.http.get<number>(`http://localhost:3000/quadratic?number=${this.form.controls.number.value || 0}`));
    }
  }
}
