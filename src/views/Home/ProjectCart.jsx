import CallToActionButton from '@/components/buttons/CallToActionButton';


export default function ProjectCard({ title, text, buttonText, buttonRoute, openedInNewTab }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl text-teal-400 mb-4">{title}</h3>
      <p className="text-white">{text}</p>
      <br />
      <CallToActionButton
        text={buttonText}
        route={buttonRoute}
        openInNewTab
      />
    </div>
  );
}
