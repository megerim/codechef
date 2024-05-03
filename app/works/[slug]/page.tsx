import WorkDetail from "@/components/section/WorkDetail";
import { works } from "@/data/works";

export default function WorkSingle({ params }: { params: { slug: string } }) {
  const work = works.find((w) => w.slug === params.slug);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <>
      <WorkDetail
        id={work.id}
        src={work.src}
        placeholder={work.placeholder}
        title={work.title}
        link={work.link}
        author={work.author}
        location={work.location}
        date={work.date}
        width={work.width}
        height={work.height}
      />
    </>
  );
}
