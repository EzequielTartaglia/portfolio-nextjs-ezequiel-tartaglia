import PageHeader from "@/components/page_formats/PageHeader";
import PageBody from "@/components/page_formats/PageBody";

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certificaciones"
        goBackRoute={"/"}
        goBackText={"Volver al inicio"}
      />
      <PageBody></PageBody>
    </>
  );
}
