import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

function seatsAvailableValidator(control: { value: any; })
 {
  const value = control.value;
  if (value >= 0 && value <= 8) {
    return null; // Valid
  } else {
    return { seatsAvailable: true }; // Invalid
  }
}

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})


export class OfferRideComponent {


  showAlert() {
    alert(`Logged Out Successfull`);
  }
  


  rideForm: any;

  constructor(private fb: FormBuilder) {
    this.rideForm = this.fb.group({

      name:['', Validators.required],
      startLocation:['', Validators.required],
      destination:['', Validators.required],
      car:['', Validators.required],
      seatsAvailable: ['', [Validators.required, seatsAvailableValidator]]
    });
  }

  onSubmit() 
{
  if (this.rideForm.valid) {
    alert('Ride offered successfully!');
  }
}

}

