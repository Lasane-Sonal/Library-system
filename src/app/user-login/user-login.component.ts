import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class userloginComponent{

  // LoginUsers:any[]=[];

  // loginObj:any={
  //   UserName:'',
  //   password:''
  // };

  // constructor(){ }

  // ngOnInit(): void {
    
  // }

  loginForm!:FormGroup

  submitted=false;

  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(){
    //validations

    this.loginForm=this.formBuilder.group({

      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]


    })

    
  }

  onSubmit() {

    this.submitted=true


    if(this.loginForm.invalid){
      return
    }
    
    alert("Login Successfully!")
  }

}
