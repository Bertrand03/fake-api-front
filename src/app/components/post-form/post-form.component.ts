import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.post = new Post('', '');
  }

  ngOnInit(): void {
    this.initForm();
  }

  // Controle pour voir ce que vaut le post
  onFormSubmitted(): void {
    if (this.form.valid) {
      console.log('this.post vaut : ');
      console.log(this.post);
    }
  }

  private initForm() {
    this.form = this.fb.group({ // Groupe un ensemble de controle (qui se trouve coté html)
      // On passe par un FormControl pour inclure des validators et donc contraindre certains champs dans le formulaire
      // Les Validators doivent être mis dans un tableau. S'il y en a qu'un seul comme pour body, on peut le mettre juste comme ça
      title: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      body: [undefined, Validators.required]
    });
  }

}
