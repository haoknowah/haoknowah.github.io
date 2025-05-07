import { Component, OnInit } from '@angular/core';

export interface Feat
{
  name: string;
  description: string;
}
const FEATS: Feat[] = [
  {name: 'Guest Check In', description: 'Worked at the front desk and took care of the needs of the nearly 200 guests in the hotel, ensuring that they had a pleasant stay.'},
  {name: 'Event Setup', description: 'Streamlined operational processes by developing and optimizing workflows for event setups, ensuring efficient preparation and service for catering events involving up to 300+ attendees. This led to a 15% increase in overall service efficiency.'},
  {name: 'Full Stack Development', description: 'Utilize different technologies such as Angular and Spring to create and host the front end and back end of websites such as this one.'},
  {name: 'Debugging', description: 'Analyzed, debugged, and resolved over 200 technical issues reported by users, achieving a 98% resolution rate within Service Level Agreements (SLA).'},
  {name: 'Customer Service', description: 'Enhance customer experience by quickly addressing and resolving any issues or concerns.'},
  {name: 'Meow', description: 'Likes to occasionally meow.'},
  {name: 'Creative Problem Solving', description: 'Learned to use limited resources on hand to work around a problem or solve it in an unconventional way.'}
]
@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css'
})
export class FeatsComponent implements OnInit{
  feats = FEATS;

  ngOnInit(): void {
    this.feats.sort((a, b) => a.name.localeCompare(b.name));
  }
  
}
