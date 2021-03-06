import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl ,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 /* @ViewChild('f') formSubmitted:NgForm ;

  defaultQuest="pet";
  answer='';
  genders =['male','female'];

    suggestUserName() {
    const suggestedName = 'Superuser';
  };

 // onSubmit(form:NgForm){
   // console.log(form)
  //}
  onSubmit(){
    console.log(this.formSubmitted)
  }
  */
  
  genders =['male','female'];
  signUpForm: FormGroup;
  
  ngOnInit(){
    
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'gender': new FormControl('male'),
      'hobbies':new FormArray([])
    });
  }
  onSubmit(){
     console.log(this.signUpForm)
   }
   onAddHobby(){
     const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
   }
  }
