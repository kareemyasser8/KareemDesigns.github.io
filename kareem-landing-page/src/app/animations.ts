import { trigger, style, state,animate, transition } from '@angular/animations';
export let slide = trigger(
  'slide',[
    state('void', style({top: -300})),
    transition(':enter, :leave',[animate(("0.35s ease-out"),style({top:0}))])
  ]
)
