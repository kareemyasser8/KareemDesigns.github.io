import { trigger, style, state, animate, transition, group } from '@angular/animations';
export let slide = trigger(
  'slide', [
  state('void', style({ top: -300 })),
  transition('void => *', [animate(("0.35s ease-out"), style({ top: 0 }))]),
  transition('* => void', [animate(("0.35s ease-out"), style({ top: -300 }))]),
]
)


export let startSlide = trigger(
  'startSlide',[
    state('void', style({transform: 'translateX(-90px)'})),
    transition('void => *', [animate("0.75s ease-out")])
  ]
)

export let fadeIn = trigger(
  'fadeIn',[
    state('void',style({opacity: 0})),
    transition('void => *', [animate("0.7s ease-out")])
  ]
)

