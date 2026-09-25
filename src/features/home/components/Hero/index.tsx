import { Button } from "@/shared/components/Button";

export function Hero() {
  const heroImgUrl =
    "https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg";

  const heroImgSrcSet =
    "https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg?t=st=1790350222~exp=1790353822~hmac=7a43f1315d96721e3f9b6234b793cb9d3ddeb91af7386f6e16daf06b9eb63eef&w=360 360w, https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg?t=st=1790350222~exp=1790353822~hmac=7a43f1315d96721e3f9b6234b793cb9d3ddeb91af7386f6e16daf06b9eb63eef&w=740 740w, https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg?t=st=1790350222~exp=1790353822~hmac=7a43f1315d96721e3f9b6234b793cb9d3ddeb91af7386f6e16daf06b9eb63eef&w=1060 1060w, https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg?t=st=1790350222~exp=1790353822~hmac=7a43f1315d96721e3f9b6234b793cb9d3ddeb91af7386f6e16daf06b9eb63eef&w=1480 1480w, https://img.magnific.com/fotos-gratis/poltrona-amarela-na-sala-de-estar-com-espaco-para-texto_43614-940.jpg?t=st=1790350222~exp=1790353822~hmac=7a43f1315d96721e3f9b6234b793cb9d3ddeb91af7386f6e16daf06b9eb63eef&w=2000 2000w";

  return (
    <section className="flex items-center relative min-h-[500px]">
      <img
        src={heroImgUrl}
        srcSet={heroImgSrcSet}
        alt="hero"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-7 p-8 order-2 md:p-9 md:order-1 md:items-start">
        <h4 className="font-functional text-xs uppercase tracking-wide text-white/70">
          Current Collection
        </h4>

        <h1 className="max-w-[450px] font-functional text-4xl leading-snug text-white md:text-[32px]">
          A curated selection of varied products, chosen for their materials and
          finishes.
        </h1>

        <p className="max-w-[280px] text-sm text-white">
          A curated selection of varied products, chosen for their materials and
          finishes.
        </p>

        <Button
          kind="default"
          value="See collection"
          className="mt-1"
          sizeType="small"
        />
      </div>
    </section>
  );
}
