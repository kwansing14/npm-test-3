import Code from '@/components/Code';

const TransitionLink = () => {
  return (
    <div className='docs-cmp'>
      <h2>{'Transition Link'}</h2>
      <p>
        <code>{'<TransitionLink>'}</code> can be used to replace any{' '}
        <code>{'<Link>'}</code> that is reponsible on triggering the transition
        animation.
      </p>
      <div className='divider' />
      <h2>Usage</h2>
      <ul>
        <li>
          Find a routing in NextJS using <code>{'<Link>'}</code>.
        </li>
        <Code language='javascript'>{`import Link from 'next/link';

const HomePage = () => {
  return (
    <Link href='/about'>About</Link>
  )
}

export default HomePage;
        `}</Code>
        <li>
          Replacing <code>{'<Link>'}</code> with{' '}
          <code>{'<TransitionLink>'}</code> to trigger the page exit animation
          before routing.
        </li>
        <Code language='javascript'>{`import { TransitionLink } from 'nadpt';

const HomePage = () => {
  return (
    <TransitionLink href='/about'>About</TransitionLink>
  )
}

export default HomePage;
        `}</Code>
      </ul>
    </div>
  );
};

export default TransitionLink;