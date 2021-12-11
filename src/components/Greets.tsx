import { FC } from 'react';

type Props = { name: string; times?: number };

const Greets: FC<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array<number>(times)].map((_) => (
        <p>
          Hello, {name}! {children}
        </p>
      ))}
    </>
  );
};

Greets.defaultProps = {
  times: 1,
};

export default Greets;
