import { FC } from 'react';
import Greets from 'components/Greets';

const Test: FC = () => (
  <div>
    <Greets name="Patty" times={4}>
      <span role="img" aria-label="rabbit">
        ��
      </span>
    </Greets>
  </div>
);

export default Test;
