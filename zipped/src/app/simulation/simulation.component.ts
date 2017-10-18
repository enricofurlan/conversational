import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {
  @Input('data') data:any;
  constructor() { }

  ngOnInit() {
  }

}
