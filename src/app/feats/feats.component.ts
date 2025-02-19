import { Component } from '@angular/core';

export interface Feat
{
  name: string;
  description: string;
}
const FEATS: Feat[] = [
  {name: 'Defeat Malenia Blade of Miquella', description: 'No player summons, '
    + 'anyone who does not think that this is an accomplishment can fight me.'},
  {name: 'Guest Check In', description: ''},
  {name: 'Event Setup', description: ''},
  {name: 'Full Stack Development', description: ''},
  {name: 'Problem Identification', description: ''}
]
@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css'
})
export class FeatsComponent {
  feats = FEATS;
}
