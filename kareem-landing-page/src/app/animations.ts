import { trigger, style, state,animate, transition } from '@angular/animations';
export let slide = trigger(
  'slide',[
    state('void', style({top: -300})),
    transition('void => *',[animate(("0.35s ease-out"),style({top:0}))]),
  ]
)


// export let slide = trigger(
//   'slide',[
//     transition(':enter',[
//       style({top: -300}),
//       animate("0.35s ease-out")
//     ]),
//     transition(':leave',[
//       style({top: 0}),
//       animate("0.35s ease-in")
//     ])
//   ]
// )
