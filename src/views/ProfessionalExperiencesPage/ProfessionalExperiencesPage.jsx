import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";

export default function ProfessionalExperiencesPage() {
  return (
    <>
      <PageHeader
        title="Experiencias profesionales"
        goBackRoute={"/"}
        goBackText={"Volver al inicio"}
      />
      <PageBody></PageBody>
    </>
  );
}
