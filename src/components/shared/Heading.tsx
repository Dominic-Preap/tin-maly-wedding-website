interface Props {
  title: string;
  subtitle: string;
}

export const Heading: React.FC<Props> = ({ title, subtitle }) => (
  <div className="mx-auto text-center ">
    <div className="pb-2 text-center text-primary-500">{subtitle}</div>

    <h1 className="text-center text-3xl text-primary-600 md:text-5xl">{title}</h1>

    <div className="relative mx-auto max-w-xs pt-4 md:pt-8">
      <div className="title-img">
        <img
          className="mx-auto w-12"
          decoding="async"
          src="/images/section-title.png"
          alt=""
        />
      </div>
    </div>
  </div>
);
