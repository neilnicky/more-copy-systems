import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ProductImg } from "@/components/products/ProductImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Products() {
  return (
    <section id="products" className="grainy-light mt-8 mb-8 ">
      <MaxWidthWrapper className="flex flex-col justify-center ">
        <h2 className="text-3xl md:text-5xl font-semibold text-center ">
          Products
        </h2>
        <Tabs
          defaultValue="photocopiers"
          className="w-full flex flex-col justify-center"
        >
          <TabsList className="mb-12 md:mb-4">
            <TabsTrigger value="photocopiers">Photocopiers</TabsTrigger>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="scanners">Scanners</TabsTrigger>
            <TabsTrigger value="laminators">Laminators</TabsTrigger>
            <TabsTrigger value="inks">Inks & Cartridges</TabsTrigger>
            <TabsTrigger value="papers">Papers</TabsTrigger>
            <TabsTrigger value="binders">Binders</TabsTrigger>
            <TabsTrigger value="papercutters">Paper Cutters</TabsTrigger>
          </TabsList>

          <TabsContent value="photocopiers" className=""></TabsContent>

          <TabsContent value="printers"></TabsContent>

          <TabsContent value="scanners"></TabsContent>

          <TabsContent value="laminators"></TabsContent>

          <TabsContent value="inks"></TabsContent>

          <TabsContent value="papers"></TabsContent>

          <TabsContent value="binders"></TabsContent>

          <TabsContent value="papercutters"></TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
}
