import Lottie from 'lottie-react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import A from '../../public/18123-developer.json';

const Blog = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {/* <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
      Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
      autem esse explicabo molestias officia placeat, accusamus aut saepe.
    </p>

    {[...Array(20)].map((_, index) => (
      <div className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1" key={index}>
        <Link href={`/blog/blog-${index}`}>{`Blog - ${index}`}</Link>
      </div>
    ))} */}
    <Lottie animationData={A} />;
  </Main>
);

export default Blog;
