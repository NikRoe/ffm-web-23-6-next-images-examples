import Image from 'next/image';
import Cover from '../public/images/the-two-towers.png';

export default function Home() {
  return (
    <>
      <h1>Image Examples</h1>
      <ol>
        <li>
          <p>Local Image with Path Reference:</p>
          <Image
            width={160}
            height={240}
            alt=""
            src="/images/the-fellowship-of-the-ring.png"
          />
        </li>
        <li>
          <p>Local Image with Static Import:</p>
          <Image width={160} height={240} alt="" src={Cover} />
        </li>
        <li>
          <p>External Image (next.config needs to know about the domain):</p>
          <Image
            width={160}
            height={240}
            alt=""
            src="https://tolkiengateway.net/w/images/1/11/The_Lord_of_the_Rings_1955-v3.png"
          />
        </li>
      </ol>
    </>
  );
}
