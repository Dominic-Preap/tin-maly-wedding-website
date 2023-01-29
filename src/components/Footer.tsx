export const Footer: React.FC = () => (
  <footer className="mt-4 bg-primary-100 text-primary-800 ">
    <div className="container max-w-xl">
      <div className="flex flex-col justify-center pt-6 pb-3 text-center text-xl md:flex-row">
        <div>ទំនាក់ទំនងម្ចាស់ដើមការ:&nbsp;</div>
        <div>011 558 810 / 069 565 331</div>
      </div>

      <div className="flex flex-col justify-center space-x-2 pb-6 text-center leading-relaxed md:flex-row">
        <div className="">© Copyright 2023 | Made with ❤️ by </div>
        <a
          href="https://www.facebook.com/preap.chanoudom"
          target={'_blank'}
          className="font-semibold"
        >
          Dominic Preap
        </a>
      </div>
    </div>
  </footer>
);
