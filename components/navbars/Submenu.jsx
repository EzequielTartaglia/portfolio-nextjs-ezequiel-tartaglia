import Button from "../Button";

export default function SubMenu({ subMenuItems, isVisible }) {
    return (
      <div
        className={`left-0 mt-2 w-full bg-[#1c333d] shadow-md rounded-lg overflow-hidden transition duration-200 ease-in-out ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <ul className="py-2 px-4 list-none">
          {subMenuItems.map((subItem) => (
            <li key={subItem.id} className="focus:outline-none">
              <Button
                key={subItem.id}
                route={subItem.route}
                text={subItem.text}
                customClasses="block text-primary shadow-none py-2 px-4 text-title hover:bg-gold hover:text-primary"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
