import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Proyectos"
        goBackRoute={"/"}
        goBackText={"Volver al inicio"}
      />
      <PageBody></PageBody>
    </>
  );
}
