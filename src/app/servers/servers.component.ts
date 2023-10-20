import { Component } from '@angular/core';

@Component({
  // defining selector as element
  selector: 'app-servers',

  // defining selector as attribute
  //selector: '[app-servers]',

  // defining selector as class
  //selector: '.app-servers',

  // defining external html template
  templateUrl: './servers.component.html',

  // inline html template, simples quotes for oneline and backticks for multiline
  //template: `
  //<app-server>
  //</app-server>
  //`,
  
  // defining external stylesheet
  styleUrls: ['./servers.component.css']

  // defining inline styling
  //styles: [`
  //h3 {
  //  color: red;
  //}`, 
  //`div {
  //  color: red;
  //}`]
})
export class ServersComponent {

}
