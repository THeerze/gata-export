import { memo, SVGProps } from 'react';

const HeaderImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1512 963' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1512V963H0V0Z' fill='#303030' fillOpacity={0.06} />
  </svg>
);
const Memo = memo(HeaderImageIcon);
export { Memo as HeaderImageIcon };
