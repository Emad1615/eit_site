export default function SinglePageTitle({ title }) {
  return (
    <>
      <section className="banner h-auto w-full">
        <div className="wraper h-fit w-full">
          <h1 className="text-6xl font-bold text-white">{title}</h1>
        </div>
      </section>
    </>
  );
}
